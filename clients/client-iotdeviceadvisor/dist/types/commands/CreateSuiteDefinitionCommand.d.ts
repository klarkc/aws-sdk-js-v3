import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSuiteDefinitionCommandInput extends CreateSuiteDefinitionRequest {
}
export interface CreateSuiteDefinitionCommandOutput extends CreateSuiteDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new CreateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSuiteDefinitionCommand extends $Command<CreateSuiteDefinitionCommandInput, CreateSuiteDefinitionCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: CreateSuiteDefinitionCommandInput;
    constructor(input: CreateSuiteDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSuiteDefinitionCommandInput, CreateSuiteDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
