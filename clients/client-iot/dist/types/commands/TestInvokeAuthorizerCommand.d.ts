import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestInvokeAuthorizerCommandInput extends TestInvokeAuthorizerRequest {
}
export interface TestInvokeAuthorizerCommandOutput extends TestInvokeAuthorizerResponse, __MetadataBearer {
}
/**
 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 *          this to test and debug the custom authorization behavior of devices that connect to the AWS
 *          IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestInvokeAuthorizerCommand extends $Command<TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput, IoTClientResolvedConfig> {
    readonly input: TestInvokeAuthorizerCommandInput;
    constructor(input: TestInvokeAuthorizerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput>;
    private serialize;
    private deserialize;
}
