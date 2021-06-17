import { FraudDetectorClient } from "./FraudDetectorClient";
import { BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput } from "./commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "./commands/BatchGetVariableCommand";
import { CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput } from "./commands/CancelBatchPredictionJobCommand";
import { CreateBatchPredictionJobCommandInput, CreateBatchPredictionJobCommandOutput } from "./commands/CreateBatchPredictionJobCommand";
import { CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput } from "./commands/CreateDetectorVersionCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "./commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "./commands/CreateVariableCommand";
import { DeleteBatchPredictionJobCommandInput, DeleteBatchPredictionJobCommandOutput } from "./commands/DeleteBatchPredictionJobCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import { DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput } from "./commands/DeleteDetectorVersionCommand";
import { DeleteEntityTypeCommandInput, DeleteEntityTypeCommandOutput } from "./commands/DeleteEntityTypeCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput } from "./commands/DeleteEventTypeCommand";
import { DeleteExternalModelCommandInput, DeleteExternalModelCommandOutput } from "./commands/DeleteExternalModelCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput } from "./commands/DeleteModelVersionCommand";
import { DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput } from "./commands/DeleteOutcomeCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteVariableCommandInput, DeleteVariableCommandOutput } from "./commands/DeleteVariableCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "./commands/DescribeDetectorCommand";
import { DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput } from "./commands/DescribeModelVersionsCommand";
import { GetBatchPredictionJobsCommandInput, GetBatchPredictionJobsCommandOutput } from "./commands/GetBatchPredictionJobsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "./commands/GetDetectorVersionCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "./commands/GetDetectorsCommand";
import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "./commands/GetEntityTypesCommand";
import { GetEventPredictionCommandInput, GetEventPredictionCommandOutput } from "./commands/GetEventPredictionCommand";
import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "./commands/GetEventTypesCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "./commands/GetExternalModelsCommand";
import { GetKMSEncryptionKeyCommandInput, GetKMSEncryptionKeyCommandOutput } from "./commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommandInput, GetLabelsCommandOutput } from "./commands/GetLabelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "./commands/GetModelVersionCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "./commands/GetVariablesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import { PutEntityTypeCommandInput, PutEntityTypeCommandOutput } from "./commands/PutEntityTypeCommand";
import { PutEventTypeCommandInput, PutEventTypeCommandOutput } from "./commands/PutEventTypeCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "./commands/PutExternalModelCommand";
import { PutKMSEncryptionKeyCommandInput, PutKMSEncryptionKeyCommandOutput } from "./commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommandInput, PutLabelCommandOutput } from "./commands/PutLabelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDetectorVersionCommandInput, UpdateDetectorVersionCommandOutput } from "./commands/UpdateDetectorVersionCommand";
import { UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput } from "./commands/UpdateDetectorVersionMetadataCommand";
import { UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput } from "./commands/UpdateDetectorVersionStatusCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "./commands/UpdateModelVersionCommand";
import { UpdateModelVersionStatusCommandInput, UpdateModelVersionStatusCommandOutput } from "./commands/UpdateModelVersionStatusCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "./commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "./commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "./commands/UpdateVariableCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 */
export declare class FraudDetector extends FraudDetectorClient {
    /**
     * <p>Creates a batch of variables.</p>
     */
    batchCreateVariable(args: BatchCreateVariableCommandInput, options?: __HttpHandlerOptions): Promise<BatchCreateVariableCommandOutput>;
    batchCreateVariable(args: BatchCreateVariableCommandInput, cb: (err: any, data?: BatchCreateVariableCommandOutput) => void): void;
    batchCreateVariable(args: BatchCreateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCreateVariableCommandOutput) => void): void;
    /**
     * <p>Gets a batch of variables.</p>
     */
    batchGetVariable(args: BatchGetVariableCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetVariableCommandOutput>;
    batchGetVariable(args: BatchGetVariableCommandInput, cb: (err: any, data?: BatchGetVariableCommandOutput) => void): void;
    batchGetVariable(args: BatchGetVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetVariableCommandOutput) => void): void;
    /**
     * <p>Cancels the specified batch prediction job.</p>
     */
    cancelBatchPredictionJob(args: CancelBatchPredictionJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelBatchPredictionJobCommandOutput>;
    cancelBatchPredictionJob(args: CancelBatchPredictionJobCommandInput, cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void): void;
    cancelBatchPredictionJob(args: CancelBatchPredictionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void): void;
    /**
     * <p>Creates a batch prediction job.</p>
     */
    createBatchPredictionJob(args: CreateBatchPredictionJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateBatchPredictionJobCommandOutput>;
    createBatchPredictionJob(args: CreateBatchPredictionJobCommandInput, cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void): void;
    createBatchPredictionJob(args: CreateBatchPredictionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void): void;
    /**
     * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
     */
    createDetectorVersion(args: CreateDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDetectorVersionCommandOutput>;
    createDetectorVersion(args: CreateDetectorVersionCommandInput, cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void): void;
    createDetectorVersion(args: CreateDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Creates a model using the specified model type.</p>
     */
    createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
    createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    createModel(args: CreateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    /**
     * <p>Creates a version of the model using the specified model type and model id.
     *         </p>
     */
    createModelVersion(args: CreateModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelVersionCommandOutput>;
    createModelVersion(args: CreateModelVersionCommandInput, cb: (err: any, data?: CreateModelVersionCommandOutput) => void): void;
    createModelVersion(args: CreateModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelVersionCommandOutput) => void): void;
    /**
     * <p>Creates a rule for use with the specified detector. </p>
     */
    createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
    createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    createRule(args: CreateRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    /**
     * <p>Creates a variable.</p>
     */
    createVariable(args: CreateVariableCommandInput, options?: __HttpHandlerOptions): Promise<CreateVariableCommandOutput>;
    createVariable(args: CreateVariableCommandInput, cb: (err: any, data?: CreateVariableCommandOutput) => void): void;
    createVariable(args: CreateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVariableCommandOutput) => void): void;
    /**
     * <p>Deletes a batch prediction job.</p>
     */
    deleteBatchPredictionJob(args: DeleteBatchPredictionJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBatchPredictionJobCommandOutput>;
    deleteBatchPredictionJob(args: DeleteBatchPredictionJobCommandInput, cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void): void;
    deleteBatchPredictionJob(args: DeleteBatchPredictionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void): void;
    /**
     * <p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p>
     * 	        <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteDetector(args: DeleteDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDetectorCommandOutput>;
    deleteDetector(args: DeleteDetectorCommandInput, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
    deleteDetector(args: DeleteDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
    /**
     * <p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p>
     * 	  	     <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDetectorVersionCommandOutput>;
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void): void;
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Deletes an entity type.</p>
     * 	        <p>You cannot delete an entity type that is included in an event type.</p>
     * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteEntityType(args: DeleteEntityTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEntityTypeCommandOutput>;
    deleteEntityType(args: DeleteEntityTypeCommandInput, cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void): void;
    deleteEntityType(args: DeleteEntityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void): void;
    /**
     * <p>Deletes the specified event.</p>
     * 	        <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteEvent(args: DeleteEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventCommandOutput>;
    deleteEvent(args: DeleteEventCommandInput, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
    deleteEvent(args: DeleteEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
    /**
     * <p>Deletes an event type.</p>
     * 	        <p>You cannot delete an event type that is used in a detector or a model.</p>
     * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteEventType(args: DeleteEventTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventTypeCommandOutput>;
    deleteEventType(args: DeleteEventTypeCommandInput, cb: (err: any, data?: DeleteEventTypeCommandOutput) => void): void;
    deleteEventType(args: DeleteEventTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventTypeCommandOutput) => void): void;
    /**
     * <p>Removes a SageMaker model from Amazon Fraud Detector.</p>
     * 	        <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
     */
    deleteExternalModel(args: DeleteExternalModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExternalModelCommandOutput>;
    deleteExternalModel(args: DeleteExternalModelCommandInput, cb: (err: any, data?: DeleteExternalModelCommandOutput) => void): void;
    deleteExternalModel(args: DeleteExternalModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExternalModelCommandOutput) => void): void;
    /**
     * <p>Deletes a label.</p>
     * 	        <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
     *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
     *
     *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteLabel(args: DeleteLabelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelCommandOutput>;
    deleteLabel(args: DeleteLabelCommandInput, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
    deleteLabel(args: DeleteLabelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
    /**
     * <p>Deletes a model.</p>
     * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
     * 	        <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
    deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    deleteModel(args: DeleteModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    /**
     * <p>Deletes a model version.</p>
     * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
     * 	        <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteModelVersion(args: DeleteModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelVersionCommandOutput>;
    deleteModelVersion(args: DeleteModelVersionCommandInput, cb: (err: any, data?: DeleteModelVersionCommandOutput) => void): void;
    deleteModelVersion(args: DeleteModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelVersionCommandOutput) => void): void;
    /**
     * <p>Deletes an outcome.</p>
     * 	        <p>You cannot delete an outcome that is used in a rule version.</p>
     * 	        <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteOutcome(args: DeleteOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOutcomeCommandOutput>;
    deleteOutcome(args: DeleteOutcomeCommandInput, cb: (err: any, data?: DeleteOutcomeCommandOutput) => void): void;
    deleteOutcome(args: DeleteOutcomeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOutcomeCommandOutput) => void): void;
    /**
     * <p>Deletes the rule. You cannot delete a rule if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.</p>
     * 	  	     <p>When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
    deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
    deleteRule(args: DeleteRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a variable.</p>
     * 	        <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
     * 	        <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
     * 	        <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
     */
    deleteVariable(args: DeleteVariableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVariableCommandOutput>;
    deleteVariable(args: DeleteVariableCommandInput, cb: (err: any, data?: DeleteVariableCommandOutput) => void): void;
    deleteVariable(args: DeleteVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVariableCommandOutput) => void): void;
    /**
     * <p>Gets all versions for a specified detector.</p>
     */
    describeDetector(args: DescribeDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectorCommandOutput>;
    describeDetector(args: DescribeDetectorCommandInput, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    describeDetector(args: DescribeDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    /**
     * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
     */
    describeModelVersions(args: DescribeModelVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelVersionsCommandOutput>;
    describeModelVersions(args: DescribeModelVersionsCommandInput, cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void): void;
    describeModelVersions(args: DescribeModelVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void): void;
    /**
     * <p>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</p>
     */
    getBatchPredictionJobs(args: GetBatchPredictionJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetBatchPredictionJobsCommandOutput>;
    getBatchPredictionJobs(args: GetBatchPredictionJobsCommandInput, cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void): void;
    getBatchPredictionJobs(args: GetBatchPredictionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void): void;
    /**
     * <p>Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you
     *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
     *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
     *          To get the next page results, provide the pagination token from the
     *             <code>GetDetectorsResponse</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getDetectors(args: GetDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorsCommandOutput>;
    getDetectors(args: GetDetectorsCommandInput, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
    getDetectors(args: GetDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
    /**
     * <p>Gets a particular detector version. </p>
     */
    getDetectorVersion(args: GetDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorVersionCommandOutput>;
    getDetectorVersion(args: GetDetectorVersionCommandInput, cb: (err: any, data?: GetDetectorVersionCommandOutput) => void): void;
    getDetectorVersion(args: GetDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you
     *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
     *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
     *          To get the next page results, provide the pagination token from the
     *          <code>GetEntityTypesResponse</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getEntityTypes(args: GetEntityTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetEntityTypesCommandOutput>;
    getEntityTypes(args: GetEntityTypesCommandInput, cb: (err: any, data?: GetEntityTypesCommandOutput) => void): void;
    getEntityTypes(args: GetEntityTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEntityTypesCommandOutput) => void): void;
    /**
     * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
     */
    getEventPrediction(args: GetEventPredictionCommandInput, options?: __HttpHandlerOptions): Promise<GetEventPredictionCommandOutput>;
    getEventPrediction(args: GetEventPredictionCommandInput, cb: (err: any, data?: GetEventPredictionCommandOutput) => void): void;
    getEventPrediction(args: GetEventPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventPredictionCommandOutput) => void): void;
    /**
     * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
     *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
     *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
     *          To get the next page results, provide the pagination token from the
     *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getEventTypes(args: GetEventTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetEventTypesCommandOutput>;
    getEventTypes(args: GetEventTypesCommandInput, cb: (err: any, data?: GetEventTypesCommandOutput) => void): void;
    getEventTypes(args: GetEventTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventTypesCommandOutput) => void): void;
    /**
     * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
     *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
     *          actions retrieves a maximum of 10 records per page. If you provide a
     *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
     *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
     *          of your request. A null pagination token fetches the records from the beginning. </p>
     */
    getExternalModels(args: GetExternalModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetExternalModelsCommandOutput>;
    getExternalModels(args: GetExternalModelsCommandInput, cb: (err: any, data?: GetExternalModelsCommandOutput) => void): void;
    getExternalModels(args: GetExternalModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExternalModelsCommandOutput) => void): void;
    /**
     * <p>Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
     */
    getKMSEncryptionKey(args: GetKMSEncryptionKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetKMSEncryptionKeyCommandOutput>;
    getKMSEncryptionKey(args: GetKMSEncryptionKeyCommandInput, cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void): void;
    getKMSEncryptionKey(args: GetKMSEncryptionKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void): void;
    /**
     * <p>Gets all labels or a specific label if name is provided. This is a paginated API. If you
     *          provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records
     *          per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50.
     *          To get the next page results, provide the pagination token from the
     *          <code>GetGetLabelsResponse</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getLabels(args: GetLabelsCommandInput, options?: __HttpHandlerOptions): Promise<GetLabelsCommandOutput>;
    getLabels(args: GetLabelsCommandInput, cb: (err: any, data?: GetLabelsCommandOutput) => void): void;
    getLabels(args: GetLabelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLabelsCommandOutput) => void): void;
    /**
     * <p>Gets one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p>
     *          <p>This is a paginated API. If you
     *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
     *          per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10.
     *          To get the next page results, provide the pagination token from the
     *             response as part of your request. A null pagination token
     *          fetches the records from the beginning.</p>
     */
    getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
    getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
    getModels(args: GetModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
    /**
     * <p>Gets the details of the specified model version.</p>
     */
    getModelVersion(args: GetModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetModelVersionCommandOutput>;
    getModelVersion(args: GetModelVersionCommandInput, cb: (err: any, data?: GetModelVersionCommandOutput) => void): void;
    getModelVersion(args: GetModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetModelVersionCommandOutput) => void): void;
    /**
     * <p>Gets one or more outcomes. This is a paginated
     *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
     *          100 records per page. If you provide a <code>maxResults</code>, the value must be
     *          between 50 and 100. To get the next page results, provide the pagination token from the
     *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getOutcomes(args: GetOutcomesCommandInput, options?: __HttpHandlerOptions): Promise<GetOutcomesCommandOutput>;
    getOutcomes(args: GetOutcomesCommandInput, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
    getOutcomes(args: GetOutcomesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
    /**
     * <p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p>
     *          <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>
     */
    getRules(args: GetRulesCommandInput, options?: __HttpHandlerOptions): Promise<GetRulesCommandOutput>;
    getRules(args: GetRulesCommandInput, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
    getRules(args: GetRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
    /**
     * <p>Gets all of the variables or the specific variable. This is a
     *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
     *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
     *          50 and 100. To get the next page result, a provide a pagination token from
     *         <code>GetVariablesResult</code> as part of your request. Null pagination token
     *          fetches the records from the beginning. </p>
     */
    getVariables(args: GetVariablesCommandInput, options?: __HttpHandlerOptions): Promise<GetVariablesCommandOutput>;
    getVariables(args: GetVariablesCommandInput, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
    getVariables(args: GetVariablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
    /**
     * <p>Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the
     *             response as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates a detector. </p>
     */
    putDetector(args: PutDetectorCommandInput, options?: __HttpHandlerOptions): Promise<PutDetectorCommandOutput>;
    putDetector(args: PutDetectorCommandInput, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
    putDetector(args: PutDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
    /**
     * <p>Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.</p>
     */
    putEntityType(args: PutEntityTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutEntityTypeCommandOutput>;
    putEntityType(args: PutEntityTypeCommandInput, cb: (err: any, data?: PutEntityTypeCommandOutput) => void): void;
    putEntityType(args: PutEntityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEntityTypeCommandOutput) => void): void;
    /**
     * <p>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</p>
     */
    putEventType(args: PutEventTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutEventTypeCommandOutput>;
    putEventType(args: PutEventTypeCommandInput, cb: (err: any, data?: PutEventTypeCommandOutput) => void): void;
    putEventType(args: PutEventTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEventTypeCommandOutput) => void): void;
    /**
     * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
     */
    putExternalModel(args: PutExternalModelCommandInput, options?: __HttpHandlerOptions): Promise<PutExternalModelCommandOutput>;
    putExternalModel(args: PutExternalModelCommandInput, cb: (err: any, data?: PutExternalModelCommandOutput) => void): void;
    putExternalModel(args: PutExternalModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutExternalModelCommandOutput) => void): void;
    /**
     * <p>Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.</p>
     */
    putKMSEncryptionKey(args: PutKMSEncryptionKeyCommandInput, options?: __HttpHandlerOptions): Promise<PutKMSEncryptionKeyCommandOutput>;
    putKMSEncryptionKey(args: PutKMSEncryptionKeyCommandInput, cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void): void;
    putKMSEncryptionKey(args: PutKMSEncryptionKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void): void;
    /**
     * <p>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. </p>
     */
    putLabel(args: PutLabelCommandInput, options?: __HttpHandlerOptions): Promise<PutLabelCommandOutput>;
    putLabel(args: PutLabelCommandInput, cb: (err: any, data?: PutLabelCommandOutput) => void): void;
    putLabel(args: PutLabelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLabelCommandOutput) => void): void;
    /**
     * <p>Creates or updates an outcome. </p>
     */
    putOutcome(args: PutOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<PutOutcomeCommandOutput>;
    putOutcome(args: PutOutcomeCommandInput, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
    putOutcome(args: PutOutcomeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
    /**
     * <p>Assigns tags to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.</p>
     */
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionCommandOutput>;
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void): void;
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
     *                 <code>INACTIVE</code>). </p>
     */
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionMetadataCommandOutput>;
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void): void;
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void): void;
    /**
     * <p>Updates the detector version’s status. You can perform the following promotions or
     *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
     */
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionStatusCommandOutput>;
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void): void;
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void): void;
    /**
     * <p>Updates a model. You can update the description attribute using this action.</p>
     */
    updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
    updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
    updateModel(args: UpdateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
    /**
     * <p>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</p>
     */
    updateModelVersion(args: UpdateModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelVersionCommandOutput>;
    updateModelVersion(args: UpdateModelVersionCommandInput, cb: (err: any, data?: UpdateModelVersionCommandOutput) => void): void;
    updateModelVersion(args: UpdateModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateModelVersionCommandOutput) => void): void;
    /**
     * <p>Updates the status of a model version.</p>
     *          <p>You can perform the following status updates:</p>
     *          <ol>
     *             <li>
     *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
     *             </li>
     *             <li>
     *                <p>Change <code>ACTIVE</code>to <code>INACTIVE</code>.</p>
     *             </li>
     *          </ol>
     */
    updateModelVersionStatus(args: UpdateModelVersionStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelVersionStatusCommandOutput>;
    updateModelVersionStatus(args: UpdateModelVersionStatusCommandInput, cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void): void;
    updateModelVersionStatus(args: UpdateModelVersionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void): void;
    /**
     * <p>Updates a rule's metadata. The description attribute can be updated.</p>
     */
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleMetadataCommandOutput>;
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void): void;
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void): void;
    /**
     * <p>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). </p>
     */
    updateRuleVersion(args: UpdateRuleVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleVersionCommandOutput>;
    updateRuleVersion(args: UpdateRuleVersionCommandInput, cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void): void;
    updateRuleVersion(args: UpdateRuleVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void): void;
    /**
     * <p>Updates a variable.</p>
     */
    updateVariable(args: UpdateVariableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVariableCommandOutput>;
    updateVariable(args: UpdateVariableCommandInput, cb: (err: any, data?: UpdateVariableCommandOutput) => void): void;
    updateVariable(args: UpdateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVariableCommandOutput) => void): void;
}
