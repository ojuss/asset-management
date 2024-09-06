// formData.js

const formData = {
    // Section 1: Request Details
    requestRefNo: '', 
    requestDate: '', 
    proposerName: '',
    division: '',  
    bcNo: '', 
    disposalType: '', 
    plantCodeAndName: '',
  
    // Section 2: Asset Details
    // (Assuming `AssetTable` provides its data in a structured format)
    assetDetails: [], // Or an object if the table structure is complex
  
    // Section 3: Two Text Boxes
    techSpecification: '', 
    literatureManualsDrawings: '', 
  
    // Section 4: Present Condition of the Asset
    // (Assuming `PresentConditionTable` provides its data)
    presentCondition: [], // Or an object 
  
    // Section 5: Approval Requirements 
    // (You'll likely get these from the `ApprovalRequirements` component state)
    approvalRequirements: {
      gdcApproval: false, 
      idtApproval: false, 
      importLicense: false,
    },
  
    // Section 6: Attachments
    // (Mechanism to handle attachments will depend on your implementation)
    attachments: [], 
  };
  
  export default formData;