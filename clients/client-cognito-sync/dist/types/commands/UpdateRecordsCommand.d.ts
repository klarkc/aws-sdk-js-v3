import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { UpdateRecordsRequest, UpdateRecordsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRecordsCommandInput extends UpdateRecordsRequest {
}
export interface UpdateRecordsCommandOutput extends UpdateRecordsResponse, __MetadataBearer {
}
/**
 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p>
 *       <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, UpdateRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, UpdateRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new UpdateRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecordsCommandInput} for command's `input` shape.
 * @see {@link UpdateRecordsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRecordsCommand extends $Command<UpdateRecordsCommandInput, UpdateRecordsCommandOutput, CognitoSyncClientResolvedConfig> {
    readonly input: UpdateRecordsCommandInput;
    constructor(input: UpdateRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRecordsCommandInput, UpdateRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
