import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateLayerRequest, CreateLayerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLayerCommandInput extends CreateLayerRequest {
}
export interface CreateLayerCommandOutput extends CreateLayerResult, __MetadataBearer {
}
/**
 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to
 *         Create a Layer</a>.</p>
 *          <note>
 *             <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack
 *         does not have an existing layer of that type. A stack can have at most one instance of each
 *         noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A
 *         stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as
 *         many times as you like for that layer type.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CreateLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLayerCommandInput} for command's `input` shape.
 * @see {@link CreateLayerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLayerCommand extends $Command<CreateLayerCommandInput, CreateLayerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateLayerCommandInput;
    constructor(input: CreateLayerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLayerCommandInput, CreateLayerCommandOutput>;
    private serialize;
    private deserialize;
}
