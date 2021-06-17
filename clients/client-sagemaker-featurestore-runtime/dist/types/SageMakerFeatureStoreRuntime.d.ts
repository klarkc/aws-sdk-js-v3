import { SageMakerFeatureStoreRuntimeClient } from "./SageMakerFeatureStoreRuntimeClient";
import { DeleteRecordCommandInput, DeleteRecordCommandOutput } from "./commands/DeleteRecordCommand";
import { GetRecordCommandInput, GetRecordCommandOutput } from "./commands/GetRecordCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Contains all data plane API operations and data types for the Amazon SageMaker Feature
 *          Store. Use this API to put, delete, and retrieve (get) features from a feature
 *          store.</p>
 *          <p>Use the following operations to configure your <code>OnlineStore</code> and
 *             <code>OfflineStore</code> features, and to create and manage feature groups:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export declare class SageMakerFeatureStoreRuntime extends SageMakerFeatureStoreRuntimeClient {
    /**
     * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code>. A new record will show
     *          up in the <code>OfflineStore</code> when the <code>DeleteRecord</code> API is called. This
     *          record will have a value of <code>True</code> in the <code>is_deleted</code> column.</p>
     */
    deleteRecord(args: DeleteRecordCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRecordCommandOutput>;
    deleteRecord(args: DeleteRecordCommandInput, cb: (err: any, data?: DeleteRecordCommandOutput) => void): void;
    deleteRecord(args: DeleteRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRecordCommandOutput) => void): void;
    /**
     * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
     *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
     *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
     */
    getRecord(args: GetRecordCommandInput, options?: __HttpHandlerOptions): Promise<GetRecordCommandOutput>;
    getRecord(args: GetRecordCommandInput, cb: (err: any, data?: GetRecordCommandOutput) => void): void;
    getRecord(args: GetRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecordCommandOutput) => void): void;
    /**
     * <p>Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code>
     *          API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the
     *          record is the latest record for the <code>recordIdentifier</code>, the record is written to
     *          both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a
     *          historic record, it is written only to the <code>OfflineStore</code>.</p>
     */
    putRecord(args: PutRecordCommandInput, options?: __HttpHandlerOptions): Promise<PutRecordCommandOutput>;
    putRecord(args: PutRecordCommandInput, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
    putRecord(args: PutRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
}
