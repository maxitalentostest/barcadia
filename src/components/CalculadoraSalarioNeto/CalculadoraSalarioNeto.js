import React, { useEffect, useState } from "react"
import { CalculadoraSalarioNetoStyles } from "./CalculadoraSalarioNetoStyles"
import { useForm, Controller } from "react-hook-form"
import { NumericFormat } from "react-number-format"
import DataTable from "react-data-table-component"
import { navigate } from "gatsby"

const Contact = () => {
  const [periodo, setPeriodo] = React.useState(2)
  const [limite, setLimite] = useState(0)
  const [excedente, setExcedente] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)
  const [marginal, setMarginal] = useState(0)
  const [cuota, setCuota] = useState(0)
  const [imss, setImss] = useState(0)
  const [subsidio, setSubsidio] = useState(0)
  const [final, setFinal] = useState(0)
  const [sueldoNeto, setSueldoNeto] = useState(0)

  const {
    control,
    register,
    getValues,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm()

  const truncateDecimals = (amount) => parseFloat(amount.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])

  const clearAmounts = () => {
    setLimite(0)
    setCuota(0)
    setExcedente(0)
    setPorcentaje(0)
    setMarginal(0)
    setFinal(0)
    setSueldoNeto(0)
  }

  const imssCalculator = function (e) {
    let prestaciones, pensionados, invalidez, cesantia, excedente, imss

    if (e > 3 * 103.74) {
      excedente = (e - 3 * 103.74) * 0.004 * diasDelPeriodo[periodo]
    } else {
      excedente = 0
    }
    prestaciones = e * 0.0025 * diasDelPeriodo[periodo]
    pensionados = e * 0.00375 * diasDelPeriodo[periodo]
    invalidez = e * 0.00625 * diasDelPeriodo[periodo]
    cesantia = e * 0.01125 * diasDelPeriodo[periodo]
    imss = excedente + prestaciones + pensionados + invalidez + cesantia
    return imss
  }

  var c = {
    tipo: "Neto",
    periodo: "Mensual",
    subsidio: false,
    imss: false,
  }

  var g = function (e, sueldoEntrada) {
    let sbc
    let sdi

    if (e === "Semanal") {
      sdi = sueldoEntrada / 7
      sbc = sdi * 1.0493
    } else if (e === "Quincenal") {
      sdi = sueldoEntrada / 15
      sbc = sdi * 1.0493
    } else if (e === "Mensual") {
      sdi = sueldoEntrada / 30
      sbc = sdi * 1.0493
    }
    if (sbc > 2112.25) {
      sbc = 2112.25
    }
    return sbc
  }

  const diasDelPeriodo = [7, 15, 30]

  const onSubmit = () => {
    clearErrors()
    setImss(0)
    setSubsidio(0)
    const data = getValues()
    console.log(data)

    if (!data.currency) {
      setError("currency", { type: "focus", message: `El sueldo bruto es requerido.` }, { shouldFocus: true })
      return
    }

    const sueldoEntrada = parseFloat(data.currency.replace("$ ", "").replaceAll(",", ""))
    const minimos = [1555.8, 3111.6, 6223.2]

    if (sueldoEntrada < minimos[periodo]) {
      setError("currency", { type: "focus", message: `El sueldo bruto no puede ser inferior a $ ${minimos[periodo]}` }, { shouldFocus: true })
      return
    }

    const isrPeriodo = isrTablas[periodo]
    const cuotaFijaPeriodo = cuotaFijaTablas[periodo]
    const porcentajeSobreExcedentePeriodo = porcentajeSobreExcedenteTablas[periodo]

    const indice = isrPeriodo.findIndex((i) => i >= sueldoEntrada)
    const cuotaFijaCalc = cuotaFijaPeriodo[indice - 1]
    const limiteInferiorCalc = isrPeriodo[indice - 1]
    const excedenteCalc = parseFloat((sueldoEntrada - limiteInferiorCalc).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])
    const porcentajeCalc = porcentajeSobreExcedentePeriodo[indice - 1]
    const marginalCalc = parseFloat(((porcentajeCalc * excedenteCalc) / 100).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])
    const finalCalc = cuotaFijaCalc + marginalCalc

    const periodoTipo = ["Semanal", "Quincenal", "Mensual"]

    const imssCalc = truncateDecimals(imssCalculator(g(periodoTipo[periodo], sueldoEntrada)))

    var C = function (e) {
      var r = [93.73, 93.66, 93.66, 90.44, 88.06, 81.55, 74.83, 67.83, 58.38, 50.12, 0]
      var m = [200.85, 200.7, 200.7, 193.8, 188.7, 174.75, 160.35, 145.35, 125.1, 107.4, 0]
      var b = [407.02, 406.83, 406.62, 392.77, 382.46, 354.23, 324.87, 294.63, 253.54, 217.61, 0]

      if (e === "Semanal") {
        return r
      } else if (e === "Quincenal") {
        return m
      } else if (e === "Mensual") {
        return b
      }
    }

    var _ = function (e) {
      var i = [407.34, 610.96, 799.68, 814.66, 1023.75, 1086.19, 1228.57, 1433.32, 1638.07, 1699.88]
      var d = [872.85, 1309.2, 1713.6, 1745.7, 2193.75, 2327.55, 2632.65, 3071.4, 3510.15, 3642.6]
      var S = [1768.96, 2653.38, 3472.84, 3537.87, 4446.15, 4717.18, 5335.42, 6224.67, 7113.9, 7382.33]

      if (e === "Semanal") {
        return i
      } else if (e === "Quincenal") {
        return d
      } else if (e === "Mensual") {
        return S
      }
    }

    let i = _(periodoTipo[periodo])
    let o
    for (let a = 0; a < i.length; a++) {
      if (sueldoEntrada < i[a]) {
        o = a
        break
      } else if (sueldoEntrada >= i[i.length - 1]) {
        o = i.length
      }
    }
    const r = C(periodoTipo[periodo])
    const subsidioCalc = truncateDecimals(r[o])

    let net = sueldoEntrada - finalCalc

    if (data.imss) net = net - imssCalc
    if (data.subsidio) net = net + subsidioCalc
    const sueldoNetoCalc = truncateDecimals(net)

    if (data.subsidio) setSubsidio(subsidioCalc)
    if (data.imss) setImss(imssCalc)
    setLimite(limiteInferiorCalc)
    setCuota(cuotaFijaCalc)
    setExcedente(excedenteCalc)
    setPorcentaje(porcentajeCalc)
    setMarginal(marginalCalc)
    setFinal(finalCalc)
    setSueldoNeto(sueldoNetoCalc)

    navigate("#resultado")
  }

  return (
    <>
      <CalculadoraSalarioNetoStyles className="section">
        <form>
          <div>
            <h2>
              <span style={{ color: "#6fdde0" }}>1. </span>Selecciona período
            </h2>
          </div>
          <div style={{ margin: "3rem 0", display: "flex" }}>
            <button
              onClick={(e) => {
                e.preventDefault()
                setPeriodo(0)
                clearAmounts()
              }}
              className={`salary-button ${periodo === 0 ? "button-active" : ""}`}
            >
              Semanal
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setPeriodo(1)
                clearAmounts()
              }}
              className={`salary-button ${periodo === 1 ? "button-active" : ""}`}
            >
              Quincenal
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setPeriodo(2)
                clearAmounts()
              }}
              className={`salary-button ${periodo === 2 ? "button-active" : ""}`}
            >
              Mensual
            </button>
          </div>

          <div style={{ paddingTop: "2.5rem" }}>
            <h2>
              <span style={{ color: "#6fdde0" }}>2. </span>Ingresa el sueldo bruto.
            </h2>
          </div>

          <div style={{ color: "#ff6565", marginBottom: "0.5rem" }}>{errors.currency?.message}</div>
          <div style={{ display: "flex" }}>
            <Controller
              name="currency"
              control={control}
              render={({ field: { ref, ...rest } }) => <NumericFormat placeholder="$ 10,000.00" thousandSeparator="," decimalSeparator="." prefix="$ " decimalScale={2} getInputRef={ref} {...rest} />}
            />
            <button
              onClick={(e) => {
                e.preventDefault()
                onSubmit()
              }}
              className="salary-submit"
            >
              Calcular
            </button>
          </div>
          <div>
            <label>
              Incluir IMSS
              <input className="check" type="checkbox" id="imss" {...register("imss", { shouldUnregister: true, onChange: (e) => onSubmit() })} />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label>
              Incluir subsidio de empleado
              <input className="check" type="checkbox" id="subsidio" {...register("subsidio", { shouldUnregister: true, onChange: (e) => onSubmit() })} />
              <span className="checkmark"></span>
            </label>
          </div>

          <div id="resultado" style={{ paddingTop: "3rem" }}>
            <h2>
              <span style={{ color: "#6fdde0" }}>3. </span>Detalle de sueldo neto.
            </h2>
          </div>
          <div>
            <DataTable
              responsive
              noTableHead
              noDataComponent={null}
              customStyles={defaultStyles}
              data={[
                { concepto: "Límite inferior", cantidad: `$ ${limite}` },
                {
                  concepto: "Excedente del límite inferior",
                  cantidad: `$ ${excedente}`,
                },
                {
                  concepto: "% sobre el excedente del límite inferior",
                  cantidad: `${porcentaje} %`,
                },
                { concepto: "Impuesto marginal", cantidad: `$ ${marginal}` },
                { concepto: "Cuota fija del impuesto", cantidad: `$ ${cuota}` },
                { concepto: "ISR determinado", cantidad: `$ ${final}` },
                { concepto: "IMSS", cantidad: `$ ${imss}` },
                { concepto: "Subsidio al empleo", cantidad: `$ ${subsidio}` },
              ]}
              columns={[
                {
                  name: "concepto",
                  selector: (row) => row.concepto,
                },
                {
                  name: "cantidad",
                  selector: (row) => row.cantidad,
                },
              ]}
            />
            <DataTable
              className="results1"
              responsive
              noTableHead
              noDataComponent={null}
              customStyles={defaultStyles2}
              columns={[
                {
                  name: "concepto",
                  selector: (row) => row.concepto,
                },
                {
                  name: "cantidad",
                  selector: (row) => row.cantidad,
                },
              ]}
              data={[{ concepto: "Sueldo Neto", cantidad: `$ ${sueldoNeto} MXN` }]}
            />
            <DataTable
              className="results2"
              responsive
              noTableHead
              noDataComponent={null}
              customStyles={defaultStyles3}
              columns={[
                {
                  name: "concepto",
                  selector: (row) => row.concepto,
                },
                {
                  name: "cantidad",
                  selector: (row) => row.cantidad,
                },
              ]}
              data={[{ concepto: "Sueldo Neto", cantidad: `$ ${sueldoNeto}` }]}
            />
          </div>
          <div style={{ marginTop: "1.5rem", fontSize: ".75rem" }}>
            Esta calculadora solo contempla las prestaciones mínimas de ley menor a 1 año de antigüedad. Los resultados del ejercicio son únicamente de carácter informativo y es responsabilidad del
            usuario su uso correcto.
          </div>
        </form>
      </CalculadoraSalarioNetoStyles>
    </>
  )
}

export default Contact

const defaultStyles = {
  table: {
    style: {
      backgroundColor: "black",
    },
  },
  headCells: {
    style: {
      fontSize: "0.85rem",
    },
  },
  cells: {
    style: {
      color: "white",
      fontSize: "1rem",
      backgroundColor: "#1b1b1b",
    },
  },
  pagination: {
    style: {
      fontSize: "0.9rem",
    },
  },
  rows: {
    stripedStyle: {
      backgroundColor: "#faffe2",
    },
  },
  header: {
    style: {
      fontSize: "1rem",
      paddingLeft: 0,
    },
  },
  subHeader: {
    style: {
      minHeight: "unset",
      paddingLeft: "0",
    },
  },
}

const defaultStyles2 = {
  table: {
    style: {
      backgroundColor: "black",
      border: "solid 2px white",
      borderRadius: "6px",
    },
  },
  headCells: {
    style: {
      fontSize: "0.85rem",
    },
  },
  cells: {
    style: {
      color: "#6fdde0",
      fontWeight: 900,
      fontSize: "2rem",
      backgroundColor: "#1b1b1b",
    },
  },
  pagination: {
    style: {
      fontSize: "0.9rem",
    },
  },
  rows: {
    stripedStyle: {
      backgroundColor: "#faffe2",
    },
  },
  header: {
    style: {
      fontSize: "1rem",
      paddingLeft: 0,
    },
  },
  subHeader: {
    style: {
      minHeight: "unset",
      paddingLeft: "0",
    },
  },
}

const defaultStyles3 = {
  table: {
    style: {
      backgroundColor: "black",
      border: "solid 2px white",
      borderRadius: "6px",
    },
  },
  headCells: {
    style: {
      fontSize: "0.85rem",
    },
  },
  cells: {
    style: {
      color: "#6fdde0",
      fontWeight: 900,
      fontSize: "1rem",
      backgroundColor: "#1b1b1b",
    },
  },
  pagination: {
    style: {
      fontSize: "0.9rem",
    },
  },
  rows: {
    stripedStyle: {
      backgroundColor: "#faffe2",
    },
  },
  header: {
    style: {
      fontSize: "1rem",
      paddingLeft: 0,
    },
  },
  subHeader: {
    style: {
      minHeight: "unset",
      paddingLeft: "0",
    },
  },
}

const isrTablas = [
  [0.01, 171.79, 1458.04, 2562.36, 2978.65, 3566.23, 7192.65, 11336.58, 21643.31, 28857.79, 86573.35],
  [0.01, 368.11, 3124.36, 5490.76, 6382.81, 7641.91, 15412.81, 24292.66, 46378.51, 61838.11, 185514.31],
  [0.01, 746.05, 6332.06, 11128.02, 12935.83, 15487.72, 31236.5, 49233.01, 93993.91, 125325.21, 375975.62],
]

const cuotaFijaTablas = [
  [0, 3.29, 85.61, 205.8, 272.37, 377.65, 1152.27, 2126.95, 5218.92, 7527.59, 27150.83],
  [0, 7.05, 183.45, 441, 583.65, 809.25, 2469.15, 4557.75, 11183.4, 16130.55, 58, 180.35],
  [0, 14.32, 371.83, 893.63, 1182.88, 1640.18, 5004.12, 9236.89, 22665.17, 32691.18, 117912.32],
]

const porcentajeSobreExcedenteTablas = [
  [1.92, 6.4, 10.88, 16, 17.92, 21.36, 23.52, 30, 32, 34, 35],
  [1.92, 6.4, 10.88, 16, 17.92, 21.36, 23.52, 30, 32, 34, 35],
  [1.92, 6.4, 10.88, 16, 17.92, 21.36, 23.52, 30, 32, 34, 35],
]

var i = [407.34, 610.96, 799.68, 814.66, 1023.75, 1086.19, 1228.57, 1433.32, 1638.07, 1699.88]
var r = [93.73, 93.66, 93.66, 90.44, 88.06, 81.55, 74.83, 67.83, 58.38, 50.12, 0]
var d = [872.85, 1309.2, 1713.6, 1745.7, 2193.75, 2327.55, 2632.65, 3071.4, 3510.15, 3642.6]
var m = [200.85, 200.7, 200.7, 193.8, 188.7, 174.75, 160.35, 145.35, 125.1, 107.4, 0]
var S = [1768.96, 2653.38, 3472.84, 3537.87, 4446.15, 4717.18, 5335.42, 6224.67, 7113.9, 7382.33]
var b = [407.02, 406.83, 406.62, 392.77, 382.46, 354.23, 324.87, 294.63, 253.54, 217.61, 0]
