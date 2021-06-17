import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StopRelationalDatabaseRequest, StopRelationalDatabaseResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopRelationalDatabaseCommandInput extends StopRelationalDatabaseRequest {
}
export interface StopRelationalDatabaseCommandOutput extends StopRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
 *          <p>The <code>stop relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StopRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StopRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StopRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link StopRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopRelationalDatabaseCommand extends $Command<StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StopRelationalDatabaseCommandInput;
    constructor(input: StopRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
