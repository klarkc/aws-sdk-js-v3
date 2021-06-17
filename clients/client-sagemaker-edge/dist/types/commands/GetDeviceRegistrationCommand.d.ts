import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";
import { GetDeviceRegistrationRequest, GetDeviceRegistrationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeviceRegistrationCommandInput extends GetDeviceRegistrationRequest {
}
export interface GetDeviceRegistrationCommandOutput extends GetDeviceRegistrationResult, __MetadataBearer {
}
/**
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeviceRegistrationCommand extends $Command<GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput, SagemakerEdgeClientResolvedConfig> {
    readonly input: GetDeviceRegistrationCommandInput;
    constructor(input: GetDeviceRegistrationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SagemakerEdgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput>;
    private serialize;
    private deserialize;
}
