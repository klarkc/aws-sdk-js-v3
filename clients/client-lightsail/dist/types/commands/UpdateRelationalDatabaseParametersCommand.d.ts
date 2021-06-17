import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateRelationalDatabaseParametersRequest, UpdateRelationalDatabaseParametersResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRelationalDatabaseParametersCommandInput extends UpdateRelationalDatabaseParametersRequest {
}
export interface UpdateRelationalDatabaseParametersCommandOutput extends UpdateRelationalDatabaseParametersResult, __MetadataBearer {
}
/**
 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
 *          <p>Parameter updates don't cause outages; therefore, their application is not subject to the
 *       preferred maintenance window. However, there are two ways in which parameter updates are
 *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
 *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
 *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
 *       the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>update relational database parameters</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseParametersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRelationalDatabaseParametersCommand extends $Command<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateRelationalDatabaseParametersCommandInput;
    constructor(input: UpdateRelationalDatabaseParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput>;
    private serialize;
    private deserialize;
}
