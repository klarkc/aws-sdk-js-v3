import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateRelationalDatabaseRequest, CreateRelationalDatabaseResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRelationalDatabaseCommandInput extends CreateRelationalDatabaseRequest {
}
export interface CreateRelationalDatabaseCommandOutput extends CreateRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Creates a new database in Amazon Lightsail.</p>
 *          <p>The <code>create relational database</code> operation supports tag-based access control
 *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRelationalDatabaseCommand extends $Command<CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateRelationalDatabaseCommandInput;
    constructor(input: CreateRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
