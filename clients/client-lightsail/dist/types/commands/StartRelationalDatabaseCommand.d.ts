import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StartRelationalDatabaseRequest, StartRelationalDatabaseResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartRelationalDatabaseCommandInput extends StartRelationalDatabaseRequest {
}
export interface StartRelationalDatabaseCommandOutput extends StartRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database,
 *       use the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>start relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StartRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StartRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StartRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link StartRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartRelationalDatabaseCommand extends $Command<StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StartRelationalDatabaseCommandInput;
    constructor(input: StartRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
