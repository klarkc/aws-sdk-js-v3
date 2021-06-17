import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { RemoveLayerVersionPermissionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveLayerVersionPermissionCommandInput extends RemoveLayerVersionPermissionRequest {
}
export interface RemoveLayerVersionPermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. For more information, see
 *         <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemoveLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveLayerVersionPermissionCommand extends $Command<RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: RemoveLayerVersionPermissionCommandInput;
    constructor(input: RemoveLayerVersionPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
