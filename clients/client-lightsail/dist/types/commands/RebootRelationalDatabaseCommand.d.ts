import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RebootRelationalDatabaseRequest, RebootRelationalDatabaseResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootRelationalDatabaseCommandInput extends RebootRelationalDatabaseRequest {
}
export interface RebootRelationalDatabaseCommandOutput extends RebootRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Restarts a specific database in Amazon Lightsail.</p>
 *          <p>The <code>reboot relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RebootRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RebootRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RebootRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link RebootRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootRelationalDatabaseCommand extends $Command<RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: RebootRelationalDatabaseCommandInput;
    constructor(input: RebootRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
