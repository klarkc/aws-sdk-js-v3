import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetPermissionRequest, GetPermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPermissionCommandInput extends GetPermissionRequest {
}
export interface GetPermissionCommandOutput extends GetPermissionResponse, __MetadataBearer {
}
/**
 * <p>Gets the contents of an AWS RAM permission in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetPermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetPermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionCommandInput} for command's `input` shape.
 * @see {@link GetPermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPermissionCommand extends $Command<GetPermissionCommandInput, GetPermissionCommandOutput, RAMClientResolvedConfig> {
    readonly input: GetPermissionCommandInput;
    constructor(input: GetPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPermissionCommandInput, GetPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
