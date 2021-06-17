import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ClearDefaultAuthorizerRequest, ClearDefaultAuthorizerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ClearDefaultAuthorizerCommandInput extends ClearDefaultAuthorizerRequest {
}
export interface ClearDefaultAuthorizerCommandOutput extends ClearDefaultAuthorizerResponse, __MetadataBearer {
}
/**
 * <p>Clears the default authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ClearDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ClearDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ClearDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link ClearDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ClearDefaultAuthorizerCommand extends $Command<ClearDefaultAuthorizerCommandInput, ClearDefaultAuthorizerCommandOutput, IoTClientResolvedConfig> {
    readonly input: ClearDefaultAuthorizerCommandInput;
    constructor(input: ClearDefaultAuthorizerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClearDefaultAuthorizerCommandInput, ClearDefaultAuthorizerCommandOutput>;
    private serialize;
    private deserialize;
}
