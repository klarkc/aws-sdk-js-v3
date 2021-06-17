import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseSnapshotRequest, GetRelationalDatabaseSnapshotResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseSnapshotCommandInput extends GetRelationalDatabaseSnapshotRequest {
}
export interface GetRelationalDatabaseSnapshotCommandOutput extends GetRelationalDatabaseSnapshotResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseSnapshotCommand extends $Command<GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseSnapshotCommandInput;
    constructor(input: GetRelationalDatabaseSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
