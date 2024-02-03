import { useCallback } from "react"
import {Button, Form, Input, Radio, Space, notification} from 'antd'


import './pre-test.css'



const PreTest = () => {


    return(
        <div className="pretTest">

        <iframe className="d-none d-md-block" src="https://docs.google.com/forms/d/e/1FAIpQLScAWMcTGLufo7fvMUvKLkHsBFJmUtLC0qnjlz3ZDgqMqMDuPQ/viewform?embedded=true" width="1400" height="10603" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe className="d-block d-md-none" src="https://docs.google.com/forms/d/e/1FAIpQLScAWMcTGLufo7fvMUvKLkHsBFJmUtLC0qnjlz3ZDgqMqMDuPQ/viewform?embedded=true" width="400" height="10603" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )

//     const [form] = Form.useForm();
//     const [api, contextHolder] = notification.useNotification();


//     const onFinish = useCallback(
//         async ({one, two, three, four, five, 
//             six, seven, eight, nine, ten, eleven, 
//             twelve, thirteen, fourteen, fifteen, 
//             sixteen, seventeen, eighteen, nineteen,
//             twenty, twentyOne, twentyTwo, 
//             twentyThree, twentyFour, twentyFive, twentySix,
//         twentySeven, twentyEight, twentyNine }) => {
//             try {
//                 await fetch(
//                     'https://docs.google.com/forms/d/e/1FAIpQLScAWMcTGLufo7fvMUvKLkHsBFJmUtLC0qnjlz3ZDgqMqMDuPQ/viewform?usp=sf_link' + 
//                     new URLSearchParams({
//                         'entry.275828252': one,
//                         'entry.249986766': two,
//                         'entry.2028259210': three,
//                         'entry.1447096826': four,
//                         'entry.1252379495': five,
//                         'entry.226384985': six,
//                         'entry.1248951650': seven,
//                         'entry.735992890': eight,
//                         'entry.838371816': nine,
//                         'entry.1844430873': ten,
//                         'entry.752505962': eleven,
//                         'entry.660086993': twelve,
//                         'entry.1649155675': thirteen,
//                         'entry.1252197829': fourteen,
//                         'entry.565223493': fifteen,
//                         'entry.1583179662': sixteen,
//                         'entry.1319665151': seventeen,
//                         'entry.351765365': eighteen,
//                         'entry.1731674918': nineteen,
//                         'entry.424504852': twenty,
//                         'entry.1858561343': twentyOne,
//                         'entry.178750107': twentyTwo,
//                         'entry.1176662108': twentyThree,
//                         'entry.1705588885': twentyFour,
//                         'entry.899591466': twentyFive,
//                         'entry.190614964': twentySix,
//                         'entry.441715885': twentySeven,
//                         'entry.1286169630': twentyEight,
//                         'entry.747239794': twentyNine

//                     }),
//                     {mode: 'no-cors',}
//                 );
//                 api.success({
//                     message: 'Submited successfully'
//                 });
//                 form.resetFields();
//             } catch (e) {
//                 api.error({
//                     message: e.message
//                 })
//             }
//         },

//         [api, form]
//     )

// return(
// <>
//     {contextHolder}
//     <Form
//         form={form}
//         layout="vertical"
//         wrapperCol={{ span: 18 }}
//         onFinish={onFinish}
//     >

//     {/* Question one*/}
//         <Form.Item
//           name="one"
//           label="1. The nurse is caring for a client in the emergency department who presents with a complaint of fatigue and shortness of breath. Which physical assessment finding, if noted by the nurse, warrants a need for follow-up?"
//           rules={[{ required: true, message: 'React version is required' }]}
//         >
//           <Radio.Group>
//             <Space direction="vertical">
//               <Radio value="A">A. Reddened sclera of the eyes</Radio>
//               <Radio value="B">B. Dry flaking noted on the scalp</Radio>
//               <Radio value="C">C. A reddish-purple mark on the neck</Radio>
//               <Radio value="D">D. A scaly rash noted on the elbows and knees</Radio>
//             </Space>
//           </Radio.Group>

//         </Form.Item>


//         {/* Question Two*/}
//         <Form.Item
//           name="two"
//           label="2. The nurse is assessing a pregnant client with a diagnosis of abruptio placentae. Which manifestations of this condition would the nurse expect to note? Select all that apply"
//           rules={[{ required: true, message: 'You must choose one option' }]}
//         >
//           <Radio.Group>
//             <Space direction="vertical">
//               <Radio value="A">A. Reddened sclera of the eyes</Radio>
//               <Radio value="B">B. Dry flaking noted on the scalp</Radio>
//               <Radio value="C">C. A reddish-purple mark on the neck</Radio>
//               <Radio value="D">D. A scaly rash noted on the elbows and knees</Radio>
//             </Space>
//           </Radio.Group>

//         </Form.Item>


//             {/* Question Three*/}
//             <Form.Item
//             name="three"
//             label="3. A pregnant client tells the nurse that she felt wetness on her peri-pad and found some clear fluid. The nurse inspects the perineum and notes the presence of the umbilical cord. What is the immediate nursing action?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Monitor the fetal heart rate.</Radio>
//                 <Radio value="B">B. Notify the primary healthcare providers.</Radio>
//                 <Radio value="C">C. Transfer the client to the delivery room.</Radio>
//                 <Radio value="D">D. Place the client in the Trendelenburg position.</Radio>
//                 <Radio value="E">E. Strong and frequent contractions</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question Fouth*/}
//             <Form.Item
//             name="four"
//             label="4. On assessment of a newborn being admitted to the nursery, the nurse palpates the anterior fontanel and notes that it feels soft. The nurse determines that this finding indicates which condition?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Dehydration</Radio>
//                 <Radio value="B">B. A normal finding</Radio>
//                 <Radio value="C">C. Increased intracranial pressure</Radio>
//                 <Radio value="D">D. Post term by at least 2weeks</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question five*/}
//             <Form.Item
//             name="five"
//             label="5. A primary health care provider prescribes acetaminophen liquid 450 mg orally every 4 hours PRN for a client's report of minor arthritic hand pain. The medication label reads 160 mg/5 mL. The nurse prepares how many milliliters (mL) to administer one dose? Fill in the blank and record your answer to the nearest whole number. Answer: ______mL"
//             rules={[{ required: true, message: 'This field cannot be empty' }]}
//             >
//             <Input />
//             </Form.Item>

//             {/* Question Six*/}
//             <Form.Item
//             name="six"
//             label="6. The nurse caring for a postpartum client should suspect that the client is experiencing endometritis if what is noted during an assessment?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Breast engorgement</Radio>
//                 <Radio value="B">B. Elevated white blood cell count</Radio>
//                 <Radio value="C">C. Lochia rubra on the second day postpartum</Radio>
//                 <Radio value="D">D. Fever over 38°C (100.4°F), beginning 2days postpartum</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question Seven*/}
//             <Form.Item
//             name="seven"
//             label="7. The nurse is performing an assessment on a post-term infant. Which physical characteristic would the nurse expect to observe in this infant?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Peeling of the skin</Radio>
//                 <Radio value="B">B. Smooth soles without creases</Radio>
//                 <Radio value="C">C. Lanugo covering the entire body</Radio>
//                 <Radio value="D">D. Vernix that covers the body in a thick layer</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question Eight*/}
//             <Form.Item
//             name="eight"
//             label="8. A post-term infant, delivered vaginally, is exhibiting tachypnea, grunting, retractions, and nasal flaring. The nurse interprets that these assessment findings are indicative of which condition?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Hypoglycemia</Radio>
//                 <Radio value="B">B. respiratory distress syndrome</Radio>
//                 <Radio value="C">C. Meconium aspiration syndrome</Radio>
//                 <Radio value="D">D. Transient tachypnea of the newborn</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question nine*/}
//             <Form.Item
//             name="nine"
//             label="9. Which arterial blood gas (ABG) values would the nurse anticipate in the client with a bowel obstruction who has a nasogastric tube attached to continuous suction?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. pH 7.25, Paco2 55, HCO3 24</Radio>
//                 <Radio value="B">B. pH7.30, Paco2 38, HCO320</Radio>
//                 <Radio value="C">C. pH7.48, Paco2 30, HCO3 23</Radio>
//                 <Radio value="D">D. pH7.49, Paco2 38, HCO330</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question ten*/}
//             <Form.Item
//             name="ten"
//             label="10. The nurse is monitoring a client with malnutrition who is receiving total parenteral nutrition (TPN). Which action would the nurse take when obtaining a finger-stick glucose reading of 425 mg/dL (23.7 mmol/L)?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Stop the TPN.</Radio>
//                 <Radio value="B">B. Administer insulin</Radio>
//                 <Radio value="C">C. Notify the primary health care provider.</Radio>
//                 <Radio value="D">D. Decrease the flow rate of the TPN.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question eleven*/}
//             <Form.Item
//             name="eleven"
//             label="11. The nurse provides information to a preoperative client who will be receiving relaxation therapy. What effects would the nurse teach the client to expect regarding this type of therapy? Select all that apply."
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Increased heart rate</Radio>
//                 <Radio value="B">B. Improved well-being</Radio>
//                 <Radio value="C">C. Lowered blood pressure</Radio>
//                 <Radio value="D">D. Increased respiratory rate</Radio>
//                 <Radio value="D">E. Decreased muscle tension</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question twelve*/}
//             <Form.Item
//             name="twelve"
//             label="12. A client with a diagnosis of diabetes mellitus has a blood glucose level of 644 mg/dL (35.8 mmol/L). The nurse interprets that this client is at risk of developing which type of acid-base imbalance?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Metabolic acidosis</Radio>
//                 <Radio value="B">B. Metabolic alkalosis</Radio>
//                 <Radio value="C">C. Respiratory acidosis</Radio>
//                 <Radio value="D">D. Respiratory alkalosis</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question ten*/}
//             <Form.Item
//             name="thirteen"
//             label="13. The nurse reviews the most recent blood gas results of a client diagnosed with asthma. The nurse notes a pH of 7.43, Pco2 of 31 mm Hg, and HCO3 of 21 mEq/L. Based on these results, the nurse determines that which acid-base imbalance is present?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Compensated metabolic acidosis</Radio>
//                 <Radio value="B">B. Compensated respiratory alkalosis</Radio>
//                 <Radio value="C">C. Uncompensated respiratory acidosis</Radio>
//                 <Radio value="D">D. Uncompensated metabolic alkalosis</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question ten*/}
//             <Form.Item
//             name="fourteen"
//             label="14. The nurse, while caring for a hospitalized infant being monitored for hydrocephalus, notes that the anterior fontanel bulges when the infant cries. Based on this assessment finding, which conclusion would the nurse draw?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. No action is required</Radio>
//                 <Radio value="B">B. The head of the bed needs to be lowered.</Radio>
//                 <Radio value="C">C. The infant needs to be placed on nothing by mouth (NPO) status.</Radio>
//                 <Radio value="D">D. The primary health care provider should be notified immediately.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question fifteen*/}
//             <Form.Item
//             name="fifteen"
//             label="15. The nurse assessing the vital signs of a 3-year-old child hospitalized with a diagnosis of croup notes that the respiratory rate is 28 breaths/min. Based on this finding, which nursing action is appropriate?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Begin administering supplemental oxygen</Radio>
//                 <Radio value="B">B. Document the findings according to facility policies.</Radio>
//                 <Radio value="C">C. Notify the child's primary health care provider immediately.</Radio>
//                 <Radio value="D">D. Reassess the respiratory rate, rhythm, and depth in 15minutes.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>

//             {/* Question sixteen*/}
//             <Form.Item
//             name="sixteen"
//             label="16. The nurse admits a client who is in sickle cell crisis. The nurse would prepare for which intervention as a priority in the management of the client?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Blood transfusion</Radio>
//                 <Radio value="B">B. Intravenous fluid therapy</Radio>
//                 <Radio value="C">C. Oxygen administration</Radio>
//                 <Radio value="D">D. Pain management with an opioid</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question seventeen*/}
//             <Form.Item
//             name="seventeen"
//             label="17. A pregnant client at 32 weeks of gestation is admitted to the obstetrical unit for observation after a motor vehicle crash. When the client begins experiencing slight vaginal bleeding and mild cramps, which action would the nurse take to determine the viability of the fetus?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Insert an intravenous line and begin an infusion at 125mL/hr.</Radio>
//                 <Radio value="B">B. Administeroxygentothewomanviaafacemaskat7to10 L/min</Radio>
//                 <Radio value="C">C. Position and connect the ultrasound transducer to the external fetal monitor.</Radio>
//                 <Radio value="D">D. Position and connect a spiral electrode to the fetal monitor for internal fetal monitoring</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question eighteen*/}
//             <Form.Item
//             name="eighteen"
//             label="18. The nurse is reviewing the results of a sweat test performed on a child diagnosed with cystic fibrosis (CF). Which finding would the nurse identify as supporting this diagnosis?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. An evening sweat potassium concentration greater than 60mEq/L</Radio>
//                 <Radio value="B">B. A nearly morning sweat chloride concentration of less than 40 mEq/</Radio>
//                 <Radio value="C">C. Asweatpotassiumconcentrationthatisconsistentlylessthan40 mEq/L</Radio>
//                 <Radio value="D">D. Asweatchlorideconcentrationthatisconsistentlygreater60 mEq/L</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question nineteen*/}
//             <Form.Item
//             name="nineteen"
//             label="19. The nurse who practices culturally sensitive nursing care incorporates which concepts into client care when addressing issues related to pain? Select all that apply."
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. The expression of pain is affected by learned behaviors</Radio>
//                 <Radio value="B">B. Physiologically, all individuals experience pain in a similar manner.</Radio>
//                 <Radio value="C">C. Ethnic culture has an effect on the physiological response to pain medications.</Radio>
//                 <Radio value="D">D. Clients should be assessed for pain regardless of a lack of overt symptomatology.</Radio>
//                 <Radio value="D">E. The use of a standardized pain assessment tool pain assessment.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question twnety*/}
//             <Form.Item
//             name="twenty"
//             label="The nurse would place a client who sustained a head injury in which position to prevent increased intracranial pressure (ICP)?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. In left Sims’ position</Radio>
//                 <Radio value="B">B. In reverse Trendelenburg</Radio>
//                 <Radio value="C">C. With the head elevated on a small, flat pillow</Radio>
//                 <Radio value="D">D. With the head of the bed elevated at least 30 degrees</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question twnety one*/}
//             <Form.Item
//             name="twentyOne"
//             label="21. The nurse has just assisted a client back to bed after a fall. The nurse and primary health care provider (PHCP) have assessed the client and have determined that the client is not injured. After completing the occurrence report, the nurse would implement which action next?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Reassess the client.</Radio>
//                 <Radio value="B">B. Conduct a staff meeting to describe the fall.</Radio>
//                 <Radio value="C">C. Contact the nursing supervisor to update information regarding the fall</Radio>
//                 <Radio value="D">D. Document in the nurse’s notes that an occurrence report was completed.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnety two*/}
//             <Form.Item
//             name="twentyTwo"
//             label="22. The nurse arrives at work and is told to report (float) to the intensive care unit (ICU) for the day because the ICU is understaffed and needs additional nurses to care for the clients. The nurse has never worked in the ICU. The nurse would take which best action?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Refuse to float to the ICU based on lack of unit orientation.</Radio>
//                 <Radio value="B">B. Clarify the ICU client assignment with the team leader to ensure that it is a safe assignment.</Radio>
//                 <Radio value="C">C. Ask the nursing supervisor to review the hospital policy on floating.</Radio>
//                 <Radio value="D">D. Submit a written protest to the nursing administration, and then call the hospital lawyer.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnetyThree*/}
//             <Form.Item
//             name="twentyThree"
//             label="23. The nurse who works on the night shift enters the medication room and finds a coworker with a tourniquet wrapped around the upper arm. The coworker
//             is about to insert a needle, attached to a syringe containing a clear liquid, into the antecubital area. Which is the most appropriate action by the nurse?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Call security.</Radio>
//                 <Radio value="B">B. Call the police.</Radio>
//                 <Radio value="C">C. Call the nursing supervisor.</Radio>
//                 <Radio value="D">D. Lock the coworker in the medication room until help is obtained.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question twnetyFour*/}
//             <Form.Item
//             name="twentyFour"
//             label="25.The assistive personnel (AP) reports to the nurse that a patient’s urine
//             output for the past 24 hours has been only 360 mL. What is the nurse’s
//             priority action at this time?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Place an 18-gauge IV in the nondominant arm.</Radio>
//                 <Radio value="B">B. Elevate the patient’s head of bed at least 45 degrees.</Radio>
//                 <Radio value="C">C. Instruct the AP to provide the patient with a pitcher of ice water.</Radio>
//                 <Radio value="D">D. Contact and notify the health care provider immediately.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnetyFive*/}
//             <Form.Item
//             name="twentyFive"
//             label="26. The patient is at risk for poor perfusion related to decreased plasma
//             volume. Which assessment finding supports this risk?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Flatened neck veins when the patient is in the supine position</Radio>
//                 <Radio value="B">B. Full and bounding pedal and post-tibial pulses</Radio>
//                 <Radio value="C">C. Piting edema located in the feet, ankles, and calves</Radio>
//                 <Radio value="D">D. Shallow respirations with crackles on auscultation</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnetySix*/}
//             <Form.Item
//             name="twentySix"
//             label="27. The nursing plan of care for an older patient with dehydration includes interventions for oral health. Which interventions are within the scope of practice for an LPN/LVN being supervised by an RN? Select all that apply."
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Reminding the patient to avoid commercial mouthwashes</Radio>
//                 <Radio value="B">B. Encouraging mouth rinsing with warm saline</Radio>
//                 <Radio value="C">C. Assessing skin turgor by pinching the skin over the back of the hand</Radio>
//                 <Radio value="D">D. Observing the lips, tongue, and mucous membranes</Radio>
//                 <Radio value="E">E. Providing mouth care every 2 hours while the patient is awake</Radio>
//                 <Radio value="F">F. Seeking a dietary consult to increase fluids on meal trays</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnetySeven*/}
//             <Form.Item
//             name="twentySeven"
//             label="28 A patient has been diagnosed with disseminated herpes zoster.
//             Which personal protective equipment will the nurse need to put
//             on when preparing to assess the patient? Select all that apply."
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Surgical face mask</Radio>
//                 <Radio value="B">B. N95 respirator</Radio>
//                 <Radio value="C">C. Gown</Radio>
//                 <Radio value="D">D. Gloves</Radio>
//                 <Radio value="E">E. Goggles</Radio>
//                 <Radio value="F">F. Shoe covers</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             {/* Question eight*/}
//             <Form.Item
//             name="twentyEight"
//             label="29. A father brings his 4-week-old son to the clinic for a checkup, stating that he
//             believes his son's testicle is missing. Which of the following explanations would be
//             most appropriate?"
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. “Although the testes should have descended by now, it is not a cause for worry.”</Radio>
//                 <Radio value="B">B. “The testes often do not descend until age 6 months, but let's check to see whether the testes are present.”</Radio>
//                 <Radio value="C">C. “The testes are present in the scrotal sac at birth, but surgery can remedy the situation.”</Radio>
//                 <Radio value="D">D. “Although the testes normally descend by 1 year of age, I can understand your concern.”</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>



//             {/* Question twnety nine*/}
//             <Form.Item
//             name="twentyNine"
//             label="30. Parents bring a 10-month-old boy born with myelomeningocele and
//             hydrocephalus with a ventriculoperitoneal shunt to the emergency department. His
//             symptoms include vomiting, poor feeding, lethargy, and irritability. What interventions
//             by the nurse are most appropriate? Select all that apply."
//             rules={[{ required: true, message: 'You must choose one option' }]}
//             >
//             <Radio.Group>
//             <Space direction="vertical">
//                 <Radio value="A">A. Weigh the child</Radio>
//                 <Radio value="B">B. Listen to bowel sounds.</Radio>
//                 <Radio value="C">C. Palpate the anterior fontanel.</Radio>
//                 <Radio value="D">D. Obtain vital signs.</Radio>
//                 <Radio value="D">E. Assess pitch and quality of the child's cry.</Radio>
//             </Space>
//             </Radio.Group>

//             </Form.Item>


//             <Button type="primary" htmlType="submit">
//                 Submit
//             </Button>
//     </Form>
// </>
// )


}

export default PreTest;