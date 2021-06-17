import { ComprehendMedicalClient } from "./ComprehendMedicalClient";
import { DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput } from "./commands/DescribeEntitiesDetectionV2JobCommand";
import { DescribeICD10CMInferenceJobCommandInput, DescribeICD10CMInferenceJobCommandOutput } from "./commands/DescribeICD10CMInferenceJobCommand";
import { DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput } from "./commands/DescribePHIDetectionJobCommand";
import { DescribeRxNormInferenceJobCommandInput, DescribeRxNormInferenceJobCommandOutput } from "./commands/DescribeRxNormInferenceJobCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand";
import { DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput } from "./commands/DetectEntitiesV2Command";
import { DetectPHICommandInput, DetectPHICommandOutput } from "./commands/DetectPHICommand";
import { InferICD10CMCommandInput, InferICD10CMCommandOutput } from "./commands/InferICD10CMCommand";
import { InferRxNormCommandInput, InferRxNormCommandOutput } from "./commands/InferRxNormCommand";
import { ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput } from "./commands/ListEntitiesDetectionV2JobsCommand";
import { ListICD10CMInferenceJobsCommandInput, ListICD10CMInferenceJobsCommandOutput } from "./commands/ListICD10CMInferenceJobsCommand";
import { ListPHIDetectionJobsCommandInput, ListPHIDetectionJobsCommandOutput } from "./commands/ListPHIDetectionJobsCommand";
import { ListRxNormInferenceJobsCommandInput, ListRxNormInferenceJobsCommandOutput } from "./commands/ListRxNormInferenceJobsCommand";
import { StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput } from "./commands/StartEntitiesDetectionV2JobCommand";
import { StartICD10CMInferenceJobCommandInput, StartICD10CMInferenceJobCommandOutput } from "./commands/StartICD10CMInferenceJobCommand";
import { StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput } from "./commands/StartPHIDetectionJobCommand";
import { StartRxNormInferenceJobCommandInput, StartRxNormInferenceJobCommandOutput } from "./commands/StartRxNormInferenceJobCommand";
import { StopEntitiesDetectionV2JobCommandInput, StopEntitiesDetectionV2JobCommandOutput } from "./commands/StopEntitiesDetectionV2JobCommand";
import { StopICD10CMInferenceJobCommandInput, StopICD10CMInferenceJobCommandOutput } from "./commands/StopICD10CMInferenceJobCommand";
import { StopPHIDetectionJobCommandInput, StopPHIDetectionJobCommandOutput } from "./commands/StopPHIDetectionJobCommand";
import { StopRxNormInferenceJobCommandInput, StopRxNormInferenceJobCommandOutput } from "./commands/StopRxNormInferenceJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
export declare class ComprehendMedical extends ComprehendMedicalClient {
    /**
     * <p>Gets the properties associated with a medical entities detection job. Use this operation
     *       to get the status of a detection job.</p>
     */
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEntitiesDetectionV2JobCommandOutput>;
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void): void;
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Gets the properties associated with an InferICD10CM job. Use this operation to get the
     *       status of an inference job.</p>
     */
    describeICD10CMInferenceJob(args: DescribeICD10CMInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeICD10CMInferenceJobCommandOutput>;
    describeICD10CMInferenceJob(args: DescribeICD10CMInferenceJobCommandInput, cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void): void;
    describeICD10CMInferenceJob(args: DescribeICD10CMInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void): void;
    /**
     * <p>Gets the properties associated with a protected health information (PHI) detection job.
     *       Use this operation to get the status of a detection job.</p>
     */
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribePHIDetectionJobCommandOutput>;
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void): void;
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void): void;
    /**
     * <p>Gets the properties associated with an InferRxNorm job. Use this operation to get the
     *       status of an inference job.</p>
     */
    describeRxNormInferenceJob(args: DescribeRxNormInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRxNormInferenceJobCommandOutput>;
    describeRxNormInferenceJob(args: DescribeRxNormInferenceJobCommandInput, cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void): void;
    describeRxNormInferenceJob(args: DescribeRxNormInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p>
     *          <p> Inspects the clinical text for a variety of medical entities and returns specific
     *       information about them such as entity category, location, and confidence score on that
     *       information .</p>
     */
    detectEntities(args: DetectEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<DetectEntitiesCommandOutput>;
    detectEntities(args: DetectEntitiesCommandInput, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
    detectEntities(args: DetectEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
    /**
     * <p>Inspects the clinical text for a variety of medical entities and returns specific
     *       information about them such as entity category, location, and confidence score on that
     *       information. Amazon Comprehend Medical only detects medical entities in English language
     *       texts.</p>
     *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
     *       operation. This new action uses a different model for determining the entities in your medical
     *       text and changes the way that some entities are returned in the output. You should use the
     *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
     *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
     *         <code>Direction</code> entities as attributes instead of types. </p>
     */
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, options?: __HttpHandlerOptions): Promise<DetectEntitiesV2CommandOutput>;
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void): void;
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void): void;
    /**
     * <p> Inspects the clinical text for protected health information (PHI) entities and returns
     *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
     *       only detects entities in English language texts.</p>
     */
    detectPHI(args: DetectPHICommandInput, options?: __HttpHandlerOptions): Promise<DetectPHICommandOutput>;
    detectPHI(args: DetectPHICommandInput, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
    detectPHI(args: DetectPHICommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
    /**
     * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
     *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
     *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
     *       English language texts.  </p>
     */
    inferICD10CM(args: InferICD10CMCommandInput, options?: __HttpHandlerOptions): Promise<InferICD10CMCommandOutput>;
    inferICD10CM(args: InferICD10CMCommandInput, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
    inferICD10CM(args: InferICD10CMCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
    /**
     * <p>InferRxNorm detects medications as entities listed in a patient record and links to the
     *       normalized concept identifiers in the RxNorm database from the National Library of Medicine.
     *       Amazon Comprehend Medical only detects medical entities in English language texts.  </p>
     */
    inferRxNorm(args: InferRxNormCommandInput, options?: __HttpHandlerOptions): Promise<InferRxNormCommandOutput>;
    inferRxNorm(args: InferRxNormCommandInput, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
    inferRxNorm(args: InferRxNormCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
    /**
     * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
     */
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesDetectionV2JobsCommandOutput>;
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void): void;
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of InferICD10CM jobs that you have submitted.</p>
     */
    listICD10CMInferenceJobs(args: ListICD10CMInferenceJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListICD10CMInferenceJobsCommandOutput>;
    listICD10CMInferenceJobs(args: ListICD10CMInferenceJobsCommandInput, cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void): void;
    listICD10CMInferenceJobs(args: ListICD10CMInferenceJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of protected health information (PHI) detection jobs that you have
     *       submitted.</p>
     */
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListPHIDetectionJobsCommandOutput>;
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void): void;
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of InferRxNorm jobs that you have submitted.</p>
     */
    listRxNormInferenceJobs(args: ListRxNormInferenceJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListRxNormInferenceJobsCommandOutput>;
    listRxNormInferenceJobs(args: ListRxNormInferenceJobsCommandInput, cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void): void;
    listRxNormInferenceJobs(args: ListRxNormInferenceJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
     *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
     */
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<StartEntitiesDetectionV2JobCommandOutput>;
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void): void;
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
     *       ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a
     *       job.</p>
     */
    startICD10CMInferenceJob(args: StartICD10CMInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<StartICD10CMInferenceJobCommandOutput>;
    startICD10CMInferenceJob(args: StartICD10CMInferenceJobCommandInput, cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void): void;
    startICD10CMInferenceJob(args: StartICD10CMInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to detect protected health information (PHI). Use the
     *         <code>DescribePHIDetectionJob</code> operation to track the status of a job.</p>
     */
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartPHIDetectionJobCommandOutput>;
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void): void;
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
     *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
     *       job.</p>
     */
    startRxNormInferenceJob(args: StartRxNormInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<StartRxNormInferenceJobCommandOutput>;
    startRxNormInferenceJob(args: StartRxNormInferenceJobCommandInput, cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void): void;
    startRxNormInferenceJob(args: StartRxNormInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void): void;
    /**
     * <p>Stops a medical entities detection job in progress.</p>
     */
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<StopEntitiesDetectionV2JobCommandOutput>;
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void): void;
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Stops an InferICD10CM inference job in progress.</p>
     */
    stopICD10CMInferenceJob(args: StopICD10CMInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<StopICD10CMInferenceJobCommandOutput>;
    stopICD10CMInferenceJob(args: StopICD10CMInferenceJobCommandInput, cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void): void;
    stopICD10CMInferenceJob(args: StopICD10CMInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void): void;
    /**
     * <p>Stops a protected health information (PHI) detection job in progress.</p>
     */
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<StopPHIDetectionJobCommandOutput>;
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void): void;
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void): void;
    /**
     * <p>Stops an InferRxNorm inference job in progress.</p>
     */
    stopRxNormInferenceJob(args: StopRxNormInferenceJobCommandInput, options?: __HttpHandlerOptions): Promise<StopRxNormInferenceJobCommandOutput>;
    stopRxNormInferenceJob(args: StopRxNormInferenceJobCommandInput, cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void): void;
    stopRxNormInferenceJob(args: StopRxNormInferenceJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void): void;
}
