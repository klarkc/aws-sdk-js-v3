import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TestAuthorizationRequest, TestAuthorizationResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestAuthorizationCommandInput extends TestAuthorizationRequest {
}
export interface TestAuthorizationCommandOutput extends TestAuthorizationResponse, __MetadataBearer {
}
/**
 * <p>Tests if a specified principal is authorized to perform an AWS IoT action on a
 *          specified resource. Use this to test and debug the authorization behavior of devices that
 *          connect to the AWS IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestAuthorizationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestAuthorizationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestAuthorizationCommandInput} for command's `input` shape.
 * @see {@link TestAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestAuthorizationCommand extends $Command<TestAuthorizationCommandInput, TestAuthorizationCommandOutput, IoTClientResolvedConfig> {
    readonly input: TestAuthorizationCommandInput;
    constructor(input: TestAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestAuthorizationCommandInput, TestAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
