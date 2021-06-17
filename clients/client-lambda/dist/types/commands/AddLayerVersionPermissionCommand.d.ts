import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AddLayerVersionPermissionRequest, AddLayerVersionPermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddLayerVersionPermissionCommandInput extends AddLayerVersionPermissionRequest {
}
export interface AddLayerVersionPermissionCommandOutput extends AddLayerVersionPermissionResponse, __MetadataBearer {
}
/**
 * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. Use this action to grant layer
 *       usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all
 *       accounts in an organization.</p>
 *          <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you
 *       specified when you added it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link AddLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddLayerVersionPermissionCommand extends $Command<AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: AddLayerVersionPermissionCommandInput;
    constructor(input: AddLayerVersionPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
