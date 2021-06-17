import { __extends } from "tslib";
import { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/models_0";
import { deserializeAws_restXmlTestDNSAnswerCommand, serializeAws_restXmlTestDNSAnswerCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
 * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 * 		       <p>This call only supports querying public hosted zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, TestDNSAnswerCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, TestDNSAnswerCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new TestDNSAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestDNSAnswerCommandInput} for command's `input` shape.
 * @see {@link TestDNSAnswerCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestDNSAnswerCommand = /** @class */ (function (_super) {
    __extends(TestDNSAnswerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestDNSAnswerCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    TestDNSAnswerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "TestDNSAnswerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestDNSAnswerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestDNSAnswerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestDNSAnswerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlTestDNSAnswerCommand(input, context);
    };
    TestDNSAnswerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlTestDNSAnswerCommand(output, context);
    };
    return TestDNSAnswerCommand;
}($Command));
export { TestDNSAnswerCommand };
//# sourceMappingURL=TestDNSAnswerCommand.js.map