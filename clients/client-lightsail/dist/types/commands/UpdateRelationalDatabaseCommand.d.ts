import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateRelationalDatabaseRequest, UpdateRelationalDatabaseResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRelationalDatabaseCommandInput extends UpdateRelationalDatabaseRequest {
}
export interface UpdateRelationalDatabaseCommandOutput extends UpdateRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
 *          <p>Updates are applied immediately, or in cases where the updates could result in an outage,
 *       are applied during the database's predefined maintenance window.</p>
 *          <p>The <code>update relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRelationalDatabaseCommand extends $Command<UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateRelationalDatabaseCommandInput;
    constructor(input: UpdateRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
