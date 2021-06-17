import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabasesRequest, GetRelationalDatabasesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabasesCommandInput extends GetRelationalDatabasesRequest {
}
export interface GetRelationalDatabasesCommandOutput extends GetRelationalDatabasesResult, __MetadataBearer {
}
/**
 * <p>Returns information about all of your databases in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabasesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabasesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabasesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabasesCommand extends $Command<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabasesCommandInput;
    constructor(input: GetRelationalDatabasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput>;
    private serialize;
    private deserialize;
}
