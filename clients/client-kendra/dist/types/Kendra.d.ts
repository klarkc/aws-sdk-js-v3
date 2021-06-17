import { KendraClient } from "./KendraClient";
import { BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput } from "./commands/BatchDeleteDocumentCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import { ClearQuerySuggestionsCommandInput, ClearQuerySuggestionsCommandOutput } from "./commands/ClearQuerySuggestionsCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateQuerySuggestionsBlockListCommandInput, CreateQuerySuggestionsBlockListCommandOutput } from "./commands/CreateQuerySuggestionsBlockListCommand";
import { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "./commands/CreateThesaurusCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import { DeleteQuerySuggestionsBlockListCommandInput, DeleteQuerySuggestionsBlockListCommandOutput } from "./commands/DeleteQuerySuggestionsBlockListCommand";
import { DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput } from "./commands/DeleteThesaurusCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import { DescribeQuerySuggestionsBlockListCommandInput, DescribeQuerySuggestionsBlockListCommandOutput } from "./commands/DescribeQuerySuggestionsBlockListCommand";
import { DescribeQuerySuggestionsConfigCommandInput, DescribeQuerySuggestionsConfigCommandOutput } from "./commands/DescribeQuerySuggestionsConfigCommand";
import { DescribeThesaurusCommandInput, DescribeThesaurusCommandOutput } from "./commands/DescribeThesaurusCommand";
import { GetQuerySuggestionsCommandInput, GetQuerySuggestionsCommandOutput } from "./commands/GetQuerySuggestionsCommand";
import { ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput } from "./commands/ListDataSourceSyncJobsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import { ListQuerySuggestionsBlockListsCommandInput, ListQuerySuggestionsBlockListsCommandOutput } from "./commands/ListQuerySuggestionsBlockListsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListThesauriCommandInput, ListThesauriCommandOutput } from "./commands/ListThesauriCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput } from "./commands/StartDataSourceSyncJobCommand";
import { StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput } from "./commands/StopDataSourceSyncJobCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import { UpdateQuerySuggestionsBlockListCommandInput, UpdateQuerySuggestionsBlockListCommandOutput } from "./commands/UpdateQuerySuggestionsBlockListCommand";
import { UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput } from "./commands/UpdateQuerySuggestionsConfigCommand";
import { UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput } from "./commands/UpdateThesaurusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
export declare class Kendra extends KendraClient {
    /**
     * <p>Removes one or more documents from an index. The documents must have
     *       been added with the <code>BatchPutDocument</code> operation.</p>
     *          <p>The documents are deleted asynchronously. You can see the progress of
     *       the deletion by using AWS CloudWatch. Any error messages related to the
     *       processing of the batch are sent to you CloudWatch log.</p>
     */
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteDocumentCommandOutput>;
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void): void;
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void): void;
    /**
     * <p>Adds one or more documents to an index.</p>
     *          <p>The <code>BatchPutDocument</code> operation enables you to ingest
     *       inline documents or a set of documents stored in an Amazon S3 bucket. Use
     *       this operation to ingest your text and unstructured text into an index,
     *       add custom attributes to the documents, and to attach an access control
     *       list to the documents added to the index.</p>
     *          <p>The documents are indexed asynchronously. You can see the progress of
     *       the batch using AWS CloudWatch. Any error messages related to processing
     *       the batch are sent to your AWS CloudWatch log.</p>
     */
    batchPutDocument(args: BatchPutDocumentCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutDocumentCommandOutput>;
    batchPutDocument(args: BatchPutDocumentCommandInput, cb: (err: any, data?: BatchPutDocumentCommandOutput) => void): void;
    batchPutDocument(args: BatchPutDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutDocumentCommandOutput) => void): void;
    /**
     * <p>Clears existing query suggestions from an index.</p>
     *         <p>This deletes existing suggestions only, not the queries
     *             in the query log. After you clear suggestions, Amazon Kendra learns
     *             new suggestions based on new queries added to the query log
     *             from the time you cleared suggestions. If you do not see any
     *             new suggestions, then please allow Amazon Kendra to collect
     *             enough queries to learn new suggestions.</p>
     */
    clearQuerySuggestions(args: ClearQuerySuggestionsCommandInput, options?: __HttpHandlerOptions): Promise<ClearQuerySuggestionsCommandOutput>;
    clearQuerySuggestions(args: ClearQuerySuggestionsCommandInput, cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void): void;
    clearQuerySuggestions(args: ClearQuerySuggestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void): void;
    /**
     * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
     *          <p>You specify a name, data source connector type and description for
     *       your data source. You also specify configuration information such as
     *       document metadata (author, source URI, and so on) and user context
     *       information.</p>
     *          <p>
     *             <code>CreateDataSource</code> is a synchronous operation. The
     *       operation returns 200 if the data source was successfully created.
     *       Otherwise, an exception is raised.</p>
     */
    createDataSource(args: CreateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceCommandOutput>;
    createDataSource(args: CreateDataSourceCommandInput, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    createDataSource(args: CreateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    /**
     * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
     */
    createFaq(args: CreateFaqCommandInput, options?: __HttpHandlerOptions): Promise<CreateFaqCommandOutput>;
    createFaq(args: CreateFaqCommandInput, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
    createFaq(args: CreateFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous
     *       operation. To determine if index creation has completed, check the
     *         <code>Status</code> field returned from a call to
     *         <code>DescribeIndex</code>. The <code>Status</code> field is set to
     *         <code>ACTIVE</code> when the index is ready to use.</p>
     *          <p>Once the index is active you can index your documents using the
     *         <code>BatchPutDocument</code> operation or using one of the supported
     *       data sources. </p>
     */
    createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
    createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
    createIndex(args: CreateIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
    /**
     * <p>Creates a block list to exlcude certain queries from suggestions.</p>
     *         <p>Any query that contains words or phrases specified in the block
     *             list is blocked or filtered out from being shown as a suggestion.</p>
     *         <p>You need to provide the file location of your block list text file
     *             in your S3 bucket. In your text file, enter each block word or phrase
     *             on a separate line.</p>
     *         <p>For information on the current quota limits for block lists, see
     *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
     *                 for Amazon Kendra</a>.</p>
     */
    createQuerySuggestionsBlockList(args: CreateQuerySuggestionsBlockListCommandInput, options?: __HttpHandlerOptions): Promise<CreateQuerySuggestionsBlockListCommandOutput>;
    createQuerySuggestionsBlockList(args: CreateQuerySuggestionsBlockListCommandInput, cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void): void;
    createQuerySuggestionsBlockList(args: CreateQuerySuggestionsBlockListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void): void;
    /**
     * <p>Creates a thesaurus for an index. The thesaurus
     *       contains a list of synonyms in Solr format.</p>
     */
    createThesaurus(args: CreateThesaurusCommandInput, options?: __HttpHandlerOptions): Promise<CreateThesaurusCommandOutput>;
    createThesaurus(args: CreateThesaurusCommandInput, cb: (err: any, data?: CreateThesaurusCommandOutput) => void): void;
    createThesaurus(args: CreateThesaurusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThesaurusCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Kendra data source. An exception is not thrown if the
     *       data source is already being deleted. While the data source is being
     *       deleted, the <code>Status</code> field returned by a call to the
     *         <code>DescribeDataSource</code> operation is set to
     *         <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.</p>
     */
    deleteDataSource(args: DeleteDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSourceCommandOutput>;
    deleteDataSource(args: DeleteDataSourceCommandInput, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    deleteDataSource(args: DeleteDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    /**
     * <p>Removes an FAQ from an index.</p>
     */
    deleteFaq(args: DeleteFaqCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFaqCommandOutput>;
    deleteFaq(args: DeleteFaqCommandInput, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
    deleteFaq(args: DeleteFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
    /**
     * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if
     *       the index is already being deleted. While the index is being deleted, the
     *         <code>Status</code> field returned by a call to the
     *         <code>DescribeIndex</code> operation is set to
     *       <code>DELETING</code>.</p>
     */
    deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
    deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
    deleteIndex(args: DeleteIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
    /**
     * <p>Deletes a block list used for query suggestions for an index.</p>
     *         <p>A deleted block list might not take effect right away. Amazon Kendra
     *             needs to refresh the entire suggestions list to add back the
     *             queries that were previously blocked.</p>
     */
    deleteQuerySuggestionsBlockList(args: DeleteQuerySuggestionsBlockListCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQuerySuggestionsBlockListCommandOutput>;
    deleteQuerySuggestionsBlockList(args: DeleteQuerySuggestionsBlockListCommandInput, cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void): void;
    deleteQuerySuggestionsBlockList(args: DeleteQuerySuggestionsBlockListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void): void;
    /**
     * <p>Deletes an existing Amazon Kendra thesaurus.
     *       </p>
     */
    deleteThesaurus(args: DeleteThesaurusCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThesaurusCommandOutput>;
    deleteThesaurus(args: DeleteThesaurusCommandInput, cb: (err: any, data?: DeleteThesaurusCommandOutput) => void): void;
    deleteThesaurus(args: DeleteThesaurusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThesaurusCommandOutput) => void): void;
    /**
     * <p>Gets information about a Amazon Kendra data source.</p>
     */
    describeDataSource(args: DescribeDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSourceCommandOutput>;
    describeDataSource(args: DescribeDataSourceCommandInput, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    describeDataSource(args: DescribeDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    /**
     * <p>Gets information about an FAQ list.</p>
     */
    describeFaq(args: DescribeFaqCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFaqCommandOutput>;
    describeFaq(args: DescribeFaqCommandInput, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
    describeFaq(args: DescribeFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
    /**
     * <p>Describes an existing Amazon Kendra index</p>
     */
    describeIndex(args: DescribeIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexCommandOutput>;
    describeIndex(args: DescribeIndexCommandInput, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    describeIndex(args: DescribeIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    /**
     * <p>Describes a block list used for query suggestions for an index.</p>
     *         <p>This is used to check the current settings that are applied to a
     *             block list.</p>
     */
    describeQuerySuggestionsBlockList(args: DescribeQuerySuggestionsBlockListCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQuerySuggestionsBlockListCommandOutput>;
    describeQuerySuggestionsBlockList(args: DescribeQuerySuggestionsBlockListCommandInput, cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void): void;
    describeQuerySuggestionsBlockList(args: DescribeQuerySuggestionsBlockListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void): void;
    /**
     * <p>Describes the settings of query suggestions for an index.</p>
     *         <p>This is used to check the current settings applied
     *             to query suggestions.</p>
     */
    describeQuerySuggestionsConfig(args: DescribeQuerySuggestionsConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQuerySuggestionsConfigCommandOutput>;
    describeQuerySuggestionsConfig(args: DescribeQuerySuggestionsConfigCommandInput, cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void): void;
    describeQuerySuggestionsConfig(args: DescribeQuerySuggestionsConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void): void;
    /**
     * <p>Describes an existing Amazon Kendra thesaurus.</p>
     */
    describeThesaurus(args: DescribeThesaurusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThesaurusCommandOutput>;
    describeThesaurus(args: DescribeThesaurusCommandInput, cb: (err: any, data?: DescribeThesaurusCommandOutput) => void): void;
    describeThesaurus(args: DescribeThesaurusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThesaurusCommandOutput) => void): void;
    /**
     * <p>Fetches the queries that are suggested to your users.</p>
     */
    getQuerySuggestions(args: GetQuerySuggestionsCommandInput, options?: __HttpHandlerOptions): Promise<GetQuerySuggestionsCommandOutput>;
    getQuerySuggestions(args: GetQuerySuggestionsCommandInput, cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void): void;
    getQuerySuggestions(args: GetQuerySuggestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void): void;
    /**
     * <p>Lists the data sources that you have created.</p>
     */
    listDataSources(args: ListDataSourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSourcesCommandOutput>;
    listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    listDataSources(args: ListDataSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    /**
     * <p>Gets statistics about synchronizing Amazon Kendra with a data
     *       source.</p>
     */
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSourceSyncJobsCommandOutput>;
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void): void;
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of FAQ lists associated with an index.</p>
     */
    listFaqs(args: ListFaqsCommandInput, options?: __HttpHandlerOptions): Promise<ListFaqsCommandOutput>;
    listFaqs(args: ListFaqsCommandInput, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
    listFaqs(args: ListFaqsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon Kendra indexes that you have created.</p>
     */
    listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
    listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    listIndices(args: ListIndicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    /**
     * <p>Lists the block lists used for query suggestions for an index.</p>
     *         <p>For information on the current quota limits for block lists, see
     *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
     *                 for Amazon Kendra</a>.</p>
     */
    listQuerySuggestionsBlockLists(args: ListQuerySuggestionsBlockListsCommandInput, options?: __HttpHandlerOptions): Promise<ListQuerySuggestionsBlockListsCommandOutput>;
    listQuerySuggestionsBlockLists(args: ListQuerySuggestionsBlockListsCommandInput, cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void): void;
    listQuerySuggestionsBlockLists(args: ListQuerySuggestionsBlockListsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void): void;
    /**
     * <p>Gets a list of tags associated with a specified resource. Indexes,
     *       FAQs, and data sources can have tags associated with them.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon Kendra thesauri associated with an index.</p>
     */
    listThesauri(args: ListThesauriCommandInput, options?: __HttpHandlerOptions): Promise<ListThesauriCommandOutput>;
    listThesauri(args: ListThesauriCommandInput, cb: (err: any, data?: ListThesauriCommandOutput) => void): void;
    listThesauri(args: ListThesauriCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThesauriCommandOutput) => void): void;
    /**
     * <p>Searches an active index. Use this API to search your documents
     *          using query. The <code>Query</code> operation enables to do faceted
     *          search and to filter results based on document attributes.</p>
     *          <p>It also enables you to provide user context that Amazon Kendra uses
     *          to enforce document access control in the search results. </p>
     *          <p>Amazon Kendra searches your index for text content and question and
     *          answer (FAQ) content. By default the response contains three types of
     *          results.</p>
     *          <ul>
     *             <li>
     *                <p>Relevant passages</p>
     *             </li>
     *             <li>
     *                <p>Matching FAQs</p>
     *             </li>
     *             <li>
     *                <p>Relevant documents</p>
     *             </li>
     *          </ul>
     *          <p>You can specify that the query return only one type of result using
     *          the <code>QueryResultTypeConfig</code> parameter.</p>
     *          <p>Each query returns the 100 most relevant results. </p>
     */
    query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
    query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
    query(args: QueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryCommandOutput) => void): void;
    /**
     * <p>Starts a synchronization job for a data source. If a synchronization
     *       job is already in progress, Amazon Kendra returns a
     *         <code>ResourceInUseException</code> exception.</p>
     */
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<StartDataSourceSyncJobCommandOutput>;
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void): void;
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void): void;
    /**
     * <p>Stops a running synchronization job. You can't stop a scheduled
     *       synchronization job.</p>
     */
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<StopDataSourceSyncJobCommandOutput>;
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void): void;
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void): void;
    /**
     * <p>Enables you to provide feedback to Amazon Kendra to improve the
     *             performance of the service. </p>
     */
    submitFeedback(args: SubmitFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<SubmitFeedbackCommandOutput>;
    submitFeedback(args: SubmitFeedbackCommandInput, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    submitFeedback(args: SubmitFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    /**
     * <p>Adds the specified tag to the specified index, FAQ, or data source
     *       resource. If the tag already exists, the existing value is replaced with
     *       the new value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from an index, FAQ, or a data source.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing Amazon Kendra data source.</p>
     */
    updateDataSource(args: UpdateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSourceCommandOutput>;
    updateDataSource(args: UpdateDataSourceCommandInput, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    updateDataSource(args: UpdateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing Amazon Kendra index.</p>
     */
    updateIndex(args: UpdateIndexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexCommandOutput>;
    updateIndex(args: UpdateIndexCommandInput, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
    updateIndex(args: UpdateIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
    /**
     * <p>Updates a block list used for query suggestions for an index.</p>
     *         <p>Updates to a block list might not take effect right away. Amazon Kendra
     *             needs to refresh the entire suggestions list to apply any updates to the
     *             block list. Other changes not related to the block list apply immediately.</p>
     *         <p>If a block list is updating, then you need to wait for the first update to
     *             finish before submitting another update.</p>
     *         <p>Amazon Kendra supports partial updates, so you only need to provide the fields
     *             you want to update.</p>
     */
    updateQuerySuggestionsBlockList(args: UpdateQuerySuggestionsBlockListCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQuerySuggestionsBlockListCommandOutput>;
    updateQuerySuggestionsBlockList(args: UpdateQuerySuggestionsBlockListCommandInput, cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void): void;
    updateQuerySuggestionsBlockList(args: UpdateQuerySuggestionsBlockListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void): void;
    /**
     * <p>Updates the settings of query suggestions for an index.</p>
     *         <p>Amazon Kendra supports partial updates, so you only need to provide
     *             the fields you want to update.</p>
     *         <p>If an update is currently processing (i.e. 'happening'), you
     *             need to wait for the update to finish before making another update.</p>
     *         <p>Updates to query suggestions settings might not take effect right away.
     *             The time for your updated settings to take effect depends on the updates
     *             made and the number of search queries in your index.</p>
     *         <p>You can still enable/disable query suggestions at any time.</p>
     */
    updateQuerySuggestionsConfig(args: UpdateQuerySuggestionsConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQuerySuggestionsConfigCommandOutput>;
    updateQuerySuggestionsConfig(args: UpdateQuerySuggestionsConfigCommandInput, cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void): void;
    updateQuerySuggestionsConfig(args: UpdateQuerySuggestionsConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void): void;
    /**
     * <p>Updates a thesaurus file associated with an index.</p>
     */
    updateThesaurus(args: UpdateThesaurusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThesaurusCommandOutput>;
    updateThesaurus(args: UpdateThesaurusCommandInput, cb: (err: any, data?: UpdateThesaurusCommandOutput) => void): void;
    updateThesaurus(args: UpdateThesaurusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThesaurusCommandOutput) => void): void;
}
