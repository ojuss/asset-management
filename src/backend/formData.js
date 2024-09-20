
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
    
    assetDetails: [],
  
    // Section 3: Two Text Boxes
    
    techSpecification: '', 
    literatureManualsDrawings: '',
  
    // Section 4: Present Condition of the Asset
    
    presentCondition: [],
  
    // Section 5: Approval Requirements 
    
    approvalRequirements: {
      gdcApproval: false, 
      idtApproval: false, 
      importLicense: false,
    },
  
    // Section 6: Attachments

    attachments: [], 
  };
  
  export default formData;

