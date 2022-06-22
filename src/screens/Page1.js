
import Header from "../components/Header";
import Text from "../components/Text";
import Sector from "../components/Sector";
import TextArea from "../components/TextArea";
import CustomRadio from '../components/CustomRadio';
import Numbers from "../components/Numbers";
import CustomDate from "../components/CustomDate";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import CustomCheckbox from "../components/CustomCheckbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page1 = ()=>{

    let navigate = useNavigate();
    // let BASE_URL = 'http://localhost:8000';
    let BASE_URL = 'https://api.safeforia.com'


    let [email, setEmail] = useState('')
    let [name, setName] = useState('')
    let [company, setCompany] = useState('')
    let [number, setNumber] = useState('')
    let [address, setAddress] = useState('')
    let [sample, setSample] = useState('')

    let [totalSample, setTotalSample] = useState('')
    let [storage, setStorage] = useState([])
    let [desc, setDesc] = useState('')
    let [origin, setOrigin] = useState('')
    
    let [prod, setProd] = useState('')
    let [exp, setExp] = useState('')
    let [purpose, setPurpose] = useState('')
    let [anal, setAnal] = useState('')

    let [type, setType] = useState([])
    let [microb, setMicrob] = useState([])
    let [physi, setPhysi] = useState([])
    let [nutri, setNutri] = useState([])
    let [payemail, setPayEmail] = useState([])
    let [payment, setPayment] = useState('')

    // ERROR HANDLING DATATYPES
    let [erroremail, setErrorEmail] = useState(false)
    let [errorname, setErrorName] = useState(false)
    let [errorcompany, setErrorCompany] = useState(false)
    let [errornumber, setErrorNumber] = useState(false)
    let [erroraddress, setErrorAddress] = useState(false)
    let [errorsample, setErrorSample] = useState(false)

    let [errortotalSample, setErrorTotalSample] = useState(false)
    let [errorstorage, setErrorStorage] = useState(false)
    let [errordesc, setErrorDesc] = useState(false)
    let [errororigin, setErrorOrigin] = useState(false)
 
    let [errorprod, setErrorProd] = useState(false)
    let [errorexp, setErrorExp] = useState(false)
    let [errorpurpose, setErrorPurpose] = useState(false)
    let [erroranal, setErrorAnal] = useState(false)

    let [errortype, setErrorType] = useState(false)
    // let [errormicrob, setErrorMicrob] = useState(false)
    // let [errorphysi, setErrorPhysi] = useState(false)
    // let [errornutri, setErrorNutri] = useState(false)
    let [errorpayemail, setErrorPayEmail] = useState(false)
    let [errrorpayment, setErrorPayment] = useState(false)

    const onSubmit = ()=>{
        let new_nutri =''
        nutri.value !== undefined && nutri.value.forEach((item,index)=> {
            if(nutri.value.length-1 === index){
                new_nutri += item.value
            }else{
                new_nutri += item.value +';' 
            }
          })
          let new_microb =''
          microb.value !== undefined && microb.value.forEach((item,index)=> {
            if(microb.value.length-1 === index){
                new_microb += item.value 
            }else{
                new_microb += item.value +';'
            }
            // console.log(item)
          })
          let new_physi =''
          physi.value !== undefined && physi.value.forEach((item,index)=> {
            if(physi.value.length-1 === index){
                new_physi += item.value
            }else{
                new_physi += item.value +';' 
            }
          })
          let new_type =''
          type.value !== undefined && type.value.forEach((item)=> {
            new_type += item.value +';' 
            })
        let responseObj = {
            email:  email.value, 
            name: name.value,
            company: company.value,
            number: number.value,
            address: address.value,
            sample: sample.value,
            totalSample: totalSample.value,
            storage: storage.value,
            description: desc.value,
            origin: origin.value,
            prod:  prod.value, 
            exp:  exp.value, 
            purpose: purpose.value,
            analysis:  anal.value, 
            type: new_type,
            microb: new_microb,
            physi:  new_physi, 
            nutri: new_nutri,
            amount: '1000',
            payemail: payemail.value
        }

        email === '' ? setErrorEmail(true) : setErrorEmail(false)
        name === '' ? setErrorName(true) : setErrorName(false)
        company === '' ? setErrorCompany(true) : setErrorCompany(false)
        number === '' ? setErrorNumber(true) : setErrorNumber(false)
        address === '' ? setErrorAddress(true) : setErrorAddress(false)
        sample === '' ? setErrorSample(true) : setErrorSample(false)
        totalSample === '' ? setErrorTotalSample(true) : setErrorTotalSample(false)
        storage.length === 0 ? setErrorStorage(true) : setErrorStorage(false)
        desc === '' ? setErrorDesc(true) : setErrorDesc(false)
        origin === '' ? setErrorOrigin(true) : setErrorOrigin(false)
        prod === '' ? setErrorProd(true) : setErrorProd(false)
        exp === '' ? setErrorExp(true) : setErrorExp(false)
        purpose === '' ? setErrorPurpose(true) : setErrorPurpose(false)
        anal === '' ? setErrorAnal(true) : setErrorAnal(false)
        type.length === 0 ? setErrorType(true) : setErrorType(false)
        // microb.length === 0 ? setErrorMicrob(true) : setErrorMicrob(false)
        // physi.length === 0 ? setErrorPhysi(true) : setErrorPhysi(false)
        // nutri.length === 0 ? setErrorNutri(true) : setErrorNutri(false)
        payemail.length === 0 ? setErrorPayEmail(true) : setErrorPayEmail(false)
        payment.length === 0 ? setErrorPayment(true) : setErrorPayment(false)

       
        if(email=== '' || name === '' ||
        company === '' || number === '' || address === '' ||
        sample === '' || totalSample === '' ||  storage.length === 0 || desc === '' ||
        origin === '' || prod === '' || exp === '' ||
        purpose === '' || anal === '' || type.length === 0 ||  payemail.length === 0 || payment.length === 0){
            console.log('FILL ALL FIELDS',payment.value)

        }
        else if(email!== '' && name !== '' &&
            company !== '' && number !== '' && address !== '' &&
            sample !== '' && totalSample !== '' &&  storage.length !== 0 && desc !== '' &&
            origin !== '' && prod !== '' && exp !== '' &&
            purpose !== '' && anal !== '' && type.length !== 0 &&  payemail.length !== 0 && payment.length !== 0
             ){
            // NO ERROR -- SUBMIT DATA
            console.log('SUBMITTING DATA :>> ', responseObj, payment);
           
            if(payment.value === 'Pay now'){
                postRequest(responseObj, 'paynow')
            }else{
                postRequest(responseObj, 'success')
            }
        }
        
    }

    const postRequest = (data, route)=>{
        console.log('POSTING DATA TO SERVER: 22', data);
        let url = BASE_URL+'/submit'
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('API POST',data)
            if(route ===  "success"){
              navigate(`${process.env.PUBLIC_URL}/success`)
            }else{
              
               window.location.href = `https://api.safeforia.com/payment/${payemail.value}/${1002}`;
            }
          }).catch((error)=>{
            console.log('Error Api:>> ', error);
            navigate(`${process.env.PUBLIC_URL}/`)
            
          });
      }

    // const onClear = ()=>{
    //     setEmail('')
    //     setName('')
    //     setCompany('')
    //     setNumber('')
    //     setAddress('')
    //     setSample('')
    //     setTotalSample('')
    //     setStorage([])
    //     setDesc('')
    //     setOrigin('')
    //     setProd('')
    //     setExp('')
    //     setPurpose('')
    //     setAnal('')
    //     setType([])
    //     setMicrob([])
    //     setPhysi([])
    //     setNutri([])
    //     setPayEmail('')

    //     setErrorEmail(false)
    //     setErrorName(false)
    //     setErrorCompany(false)
    //     setErrorNumber(false)
    //     setErrorAddress(false)
    //     setErrorSample(false)
    //     setErrorTotalSample(false) 
    //     setErrorStorage(false)
    //     setErrorDesc(false)
    //     setErrorOrigin(false)
    //     setErrorProd(false)
    //     setErrorExp(false)
    //     setErrorPurpose(false)
    //     setErrorAnal(false)
    //     setErrorType(false)
    //     // setErrorMicrob(false)
    //     // setErrorPhysi(false)
    //     // setErrorNutri(false)
    //     setErrorPayEmail(false)

    //     console.log('on clear clicked :>> ');
    // }


    return (
        <>
            <div className="main-body">
                <Header></Header>
                <Sector sector_title={'PERSONAL & COMPANY INFORMATION'}/>
                <Text onValueChange={setEmail} question={"Email"} questionName={'email'} errorState={erroremail}/>
                <Text onValueChange={setName} question={"Name of Person"} questionName={'name'} errorState={errorname}/>
                <Text onValueChange={setCompany} question={"Name of Company"} questionName={'company'} errorState={errorcompany}/>
                <Text onValueChange={setNumber} question={"Contact Number"} questionName={'number'} errorState={errornumber}/>
                <TextArea onValueChange={setAddress} question={"Address"} questionName={'address'} errorState={erroraddress}/>

                <Sector sector_title={'SAMPLE INFORMATION'}/>
                <Text onValueChange={setSample} question={"Name of Sample"} questionName={'sample'} errorState={errorsample}/>
                <Numbers  onValueChange = {setTotalSample} 
                    errorState = {errortotalSample}
                    question={'Number of Sample'} 
                    questionName={'numberSample'}
                 ></Numbers>
                 <CustomRadio onValueChange={setStorage} errorState={errorstorage} question={"Condition of Storage"} questionName={'storage'} answers={['Frozen', 'Chilled', 'Ambient']}></CustomRadio>
                <TextArea onValueChange={setDesc} question={"Description of sample"} questionName={'description'} errorState={errordesc}/>
                <Text onValueChange={setOrigin} question={"Country of origin(Sample)"} questionName={'country'} errorState={errororigin}/>
                <CustomDate onValueChange={setProd} question={"Production date"} questionName={'proddate'} errorState={errorprod}/>
                <CustomDate onValueChange={setExp} question={"Expiry date"} questionName={'expdate'} errorState={errorexp}/>
                <TextArea onValueChange={setPurpose} question={"Purpose of analysis"} questionName={'purpose'} errorState={errorpurpose}/>
                <TextArea onValueChange={setAnal} question={"Analytical programme decided by: Person/Org"} questionName={'decided'} errorState={erroranal}/>

                <Sector sector_title={'SAMPLE TEST REQUEST'}/>
                <Checkbox 
                errorState={errortype}
                onValueChange={setType}
                question={'Select the type of Analyses requested: Please tick all that apply'}
                answers={['Microbiology Test', 'Physico-Chemical Test', 'Nutritional Test']} />

                {( type.length===0 || type.value.filter((item)=> item.value ==='Microbiology Test').length !==0) && <CustomCheckbox
                
                onValueChange={setMicrob}
                question={'MICROBIOLOGY TEST Analyses requested: Please tick all that apply'}
                answers={['Total Plate Count',
                   'Total coliforms',
                    'Fecal coliforms',
                    'Memberane filtration for Coliform determination in water',
                   'E. coli (EMB/MaCConkey)',
                   'E. coli MPN',
                   'E. coli O157:H7',
                   'Staphylococcus spp',
                   'Staphylococcus aureus',
                   'Yeast and Moulds',
                  'Lactic acid bacteria',
                    'Aerobic spore count',
                   'Anaerobic spore count',
                    'Enterobacteriaceae',
                    'Salmonella spp.',
                    'Listeria monocytogenes',
                   'Bacillus cereus',
                    'Clostridium perfringens',
                    'Campylobacter spp',
                    'Vibrio parahaemolyticus',
                    'Pathogenic Spreptococci/ Enterococcus',
                   'Pseudomonas spp'
                ]}
                />}
                {( type.length===0 || type.value.filter((item)=> item.value ==='Physico-Chemical Test').length !==0) && <CustomCheckbox 
                
                onValueChange={setPhysi}
                question={'PHYSICO-CHEMICAL TEST Analyses requested: Please tick all that apply'}
                answers={['Total solids',
                    'Free Fatty Acids',
                    'Peroxide Value',
                    'Iodine Value',
                    'Saponification Value',
                   'Unsaponifiable Matter',
                    'Impurities (in oil)',
                    'Impurities (water insoluble)',
                    'Acidity',
                    'Alkalinity of soluble ash',
                    'Fat acidity',
                    'Acid value of oil',
                    'Lead',
                    'Arsenic',
                    'Starch',
                    'Moisture',
                    'Water soluble ash',
                    'Acid insoluble ash',
                    'Texture']}
                />}

                {( type.length===0 || type.value.filter((item)=> item.value ==='Nutritional Test').length !==0) && <CustomCheckbox 
                
                onValueChange={setNutri}
                question={'NUTRITIONAL TESTS Analyses requested: Please tick all that apply '}
                answers={['Fat (Solid, liquid and dairy)',
                    'Crude protein',
                    'Carbohydrate and Energy',
                    'Calcium',
                    'Iron',
                    'Phosphorus',
                    'Sucrose',
                    'Sugars',
                    'Sodium Chloride',
                    'Crude fibre',
                    'Vitamin A',
                    'Vitamin C',
                    'Cholesterol in oil']}
                />}
               
               <Text onValueChange={setPayEmail} question={"Email to receive payment notification"} questionName={'payemail'} errorState={errorpayemail}/>
                
                <Radio 
                        onValueChange={setPayment}
                        errorState={errrorpayment}
                        questionName={'payment'}
                        question={'Proceed to pay'}
                        answers={['Pay now', 'Pay later']}/>
               
 
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn primary-btn" onClick={onSubmit}> SUBMIT</button>
                    <div>
                        <span className="small">Page 1 of 1</span>
                        {/* <button onClick={onClear} className="primary-text btn ml-2">Clear form</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1;