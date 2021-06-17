import { TranscribeClient } from "./TranscribeClient";
import { CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput } from "./commands/CreateLanguageModelCommand";
import { CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput } from "./commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import { CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput } from "./commands/CreateVocabularyFilterCommand";
import { DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput } from "./commands/DeleteLanguageModelCommand";
import { DeleteMedicalTranscriptionJobCommandInput, DeleteMedicalTranscriptionJobCommandOutput } from "./commands/DeleteMedicalTranscriptionJobCommand";
import { DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput } from "./commands/DeleteMedicalVocabularyCommand";
import { DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput } from "./commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import { DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput } from "./commands/DeleteVocabularyFilterCommand";
import { DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput } from "./commands/DescribeLanguageModelCommand";
import { GetMedicalTranscriptionJobCommandInput, GetMedicalTranscriptionJobCommandOutput } from "./commands/GetMedicalTranscriptionJobCommand";
import { GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput } from "./commands/GetMedicalVocabularyCommand";
import { GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput } from "./commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "./commands/GetVocabularyCommand";
import { GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput } from "./commands/GetVocabularyFilterCommand";
import { ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput } from "./commands/ListLanguageModelsCommand";
import { ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput } from "./commands/ListMedicalTranscriptionJobsCommand";
import { ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput } from "./commands/ListMedicalVocabulariesCommand";
import { ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput } from "./commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "./commands/ListVocabulariesCommand";
import { ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput } from "./commands/ListVocabularyFiltersCommand";
import { StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput } from "./commands/StartMedicalTranscriptionJobCommand";
import { StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput } from "./commands/StartTranscriptionJobCommand";
import { UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput } from "./commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "./commands/UpdateVocabularyCommand";
import { UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput } from "./commands/UpdateVocabularyFilterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
export declare class Transcribe extends TranscribeClient {
    /**
     * <p>Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your
     *             input files. The time it takes to create your model depends on the size of your training
     *             data.</p>
     */
    createLanguageModel(args: CreateLanguageModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateLanguageModelCommandOutput>;
    createLanguageModel(args: CreateLanguageModelCommandInput, cb: (err: any, data?: CreateLanguageModelCommandOutput) => void): void;
    createLanguageModel(args: CreateLanguageModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLanguageModelCommandOutput) => void): void;
    /**
     * <p>Creates a new custom vocabulary that you can use to
     *             change
     *             how Amazon Transcribe Medical transcribes your audio file.</p>
     */
    createMedicalVocabulary(args: CreateMedicalVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<CreateMedicalVocabularyCommandOutput>;
    createMedicalVocabulary(args: CreateMedicalVocabularyCommandInput, cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void): void;
    createMedicalVocabulary(args: CreateMedicalVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void): void;
    /**
     * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles
     *             transcription of an audio file.</p>
     */
    createVocabulary(args: CreateVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<CreateVocabularyCommandOutput>;
    createVocabulary(args: CreateVocabularyCommandInput, cb: (err: any, data?: CreateVocabularyCommandOutput) => void): void;
    createVocabulary(args: CreateVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVocabularyCommandOutput) => void): void;
    /**
     * <p>Creates a new vocabulary filter that you can use to filter words, such as profane
     *             words, from the output of a transcription job.</p>
     */
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateVocabularyFilterCommandOutput>;
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void): void;
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Deletes a custom language model using its name.</p>
     */
    deleteLanguageModel(args: DeleteLanguageModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLanguageModelCommandOutput>;
    deleteLanguageModel(args: DeleteLanguageModelCommandInput, cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void): void;
    deleteLanguageModel(args: DeleteLanguageModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void): void;
    /**
     * <p>Deletes a transcription job generated by Amazon Transcribe Medical and any related information.</p>
     */
    deleteMedicalTranscriptionJob(args: DeleteMedicalTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMedicalTranscriptionJobCommandOutput>;
    deleteMedicalTranscriptionJob(args: DeleteMedicalTranscriptionJobCommandInput, cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void): void;
    deleteMedicalTranscriptionJob(args: DeleteMedicalTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
     */
    deleteMedicalVocabulary(args: DeleteMedicalVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMedicalVocabularyCommandOutput>;
    deleteMedicalVocabulary(args: DeleteMedicalVocabularyCommandInput, cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void): void;
    deleteMedicalVocabulary(args: DeleteMedicalVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void): void;
    /**
     * <p>Deletes a previously submitted transcription job along with any other generated
     *             results such as the transcription, models, and so on.</p>
     */
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTranscriptionJobCommandOutput>;
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void): void;
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Deletes a vocabulary from Amazon Transcribe. </p>
     */
    deleteVocabulary(args: DeleteVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVocabularyCommandOutput>;
    deleteVocabulary(args: DeleteVocabularyCommandInput, cb: (err: any, data?: DeleteVocabularyCommandOutput) => void): void;
    deleteVocabulary(args: DeleteVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVocabularyCommandOutput) => void): void;
    /**
     * <p>Removes a vocabulary filter.</p>
     */
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVocabularyFilterCommandOutput>;
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void): void;
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Gets information about a single custom language model. Use this information to see
     *             details about the language model in your AWS account. You can also see whether the base
     *             language model used to create your custom language model has been updated. If Amazon Transcribe has
     *             updated the base model, you can create a new custom language model using the updated
     *             base model. If the language model wasn't created, you can use this operation to
     *             understand why Amazon Transcribe couldn't create it. </p>
     */
    describeLanguageModel(args: DescribeLanguageModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLanguageModelCommandOutput>;
    describeLanguageModel(args: DescribeLanguageModelCommandInput, cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void): void;
    describeLanguageModel(args: DescribeLanguageModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void): void;
    /**
     * <p>Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the
     *             job, check the <code>TranscriptionJobStatus</code> field. If the status is
     *                 <code>COMPLETED</code>, the job is finished. You find the results of the completed
     *             job in the <code>TranscriptFileUri</code> field.</p>
     */
    getMedicalTranscriptionJob(args: GetMedicalTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<GetMedicalTranscriptionJobCommandOutput>;
    getMedicalTranscriptionJob(args: GetMedicalTranscriptionJobCommandInput, cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void): void;
    getMedicalTranscriptionJob(args: GetMedicalTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a medical vocabulary.</p>
     */
    getMedicalVocabulary(args: GetMedicalVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<GetMedicalVocabularyCommandOutput>;
    getMedicalVocabulary(args: GetMedicalVocabularyCommandInput, cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void): void;
    getMedicalVocabulary(args: GetMedicalVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void): void;
    /**
     * <p>Returns information about a transcription job. To see the status of the job, check the
     *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
     *             the job is finished and you can find the results at the location specified in the
     *                 <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted
     *             transcript appears in <code>RedactedTranscriptFileUri</code>.</p>
     */
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<GetTranscriptionJobCommandOutput>;
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void): void;
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Gets information about a vocabulary. </p>
     */
    getVocabulary(args: GetVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<GetVocabularyCommandOutput>;
    getVocabulary(args: GetVocabularyCommandInput, cb: (err: any, data?: GetVocabularyCommandOutput) => void): void;
    getVocabulary(args: GetVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVocabularyCommandOutput) => void): void;
    /**
     * <p>Returns information about a vocabulary filter.</p>
     */
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetVocabularyFilterCommandOutput>;
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void): void;
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Provides more information about the custom language models you've created. You can use
     *             the information in this list to find a specific custom language model. You can then use
     *             the  operation to get more information about
     *             it.</p>
     */
    listLanguageModels(args: ListLanguageModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListLanguageModelsCommandOutput>;
    listLanguageModels(args: ListLanguageModelsCommandInput, cb: (err: any, data?: ListLanguageModelsCommandOutput) => void): void;
    listLanguageModels(args: ListLanguageModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLanguageModelsCommandOutput) => void): void;
    /**
     * <p>Lists medical transcription jobs with a specified status or substring that matches
     *             their names.</p>
     */
    listMedicalTranscriptionJobs(args: ListMedicalTranscriptionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListMedicalTranscriptionJobsCommandOutput>;
    listMedicalTranscriptionJobs(args: ListMedicalTranscriptionJobsCommandInput, cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void): void;
    listMedicalTranscriptionJobs(args: ListMedicalTranscriptionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
     *             value in any of the request parameters, returns the entire list of vocabularies.</p>
     */
    listMedicalVocabularies(args: ListMedicalVocabulariesCommandInput, options?: __HttpHandlerOptions): Promise<ListMedicalVocabulariesCommandOutput>;
    listMedicalVocabularies(args: ListMedicalVocabulariesCommandInput, cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void): void;
    listMedicalVocabularies(args: ListMedicalVocabulariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void): void;
    /**
     * <p>Lists transcription jobs with the specified status.</p>
     */
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTranscriptionJobsCommandOutput>;
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void): void;
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
     *             specified, returns the entire list of vocabularies.</p>
     */
    listVocabularies(args: ListVocabulariesCommandInput, options?: __HttpHandlerOptions): Promise<ListVocabulariesCommandOutput>;
    listVocabularies(args: ListVocabulariesCommandInput, cb: (err: any, data?: ListVocabulariesCommandOutput) => void): void;
    listVocabularies(args: ListVocabulariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVocabulariesCommandOutput) => void): void;
    /**
     * <p>Gets information about vocabulary filters.</p>
     */
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListVocabularyFiltersCommandOutput>;
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void): void;
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void): void;
    /**
     * <p>Starts a batch job to transcribe medical speech to text.</p>
     */
    startMedicalTranscriptionJob(args: StartMedicalTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartMedicalTranscriptionJobCommandOutput>;
    startMedicalTranscriptionJob(args: StartMedicalTranscriptionJobCommandInput, cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void): void;
    startMedicalTranscriptionJob(args: StartMedicalTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to transcribe speech to text.</p>
     */
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartTranscriptionJobCommandOutput>;
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void): void;
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Updates a vocabulary with new values that you provide in a different text file from
     *             the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code>
     *             operation overwrites all of the existing information with the values that you provide in
     *             the request.</p>
     */
    updateMedicalVocabulary(args: UpdateMedicalVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMedicalVocabularyCommandOutput>;
    updateMedicalVocabulary(args: UpdateMedicalVocabularyCommandInput, cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void): void;
    updateMedicalVocabulary(args: UpdateMedicalVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void): void;
    /**
     * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
     *             operation overwrites all of the existing information with the values that you provide in
     *             the request. </p>
     */
    updateVocabulary(args: UpdateVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVocabularyCommandOutput>;
    updateVocabulary(args: UpdateVocabularyCommandInput, cb: (err: any, data?: UpdateVocabularyCommandOutput) => void): void;
    updateVocabulary(args: UpdateVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVocabularyCommandOutput) => void): void;
    /**
     * <p>Updates a vocabulary filter with a new list of filtered words.</p>
     */
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVocabularyFilterCommandOutput>;
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void): void;
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void): void;
}
