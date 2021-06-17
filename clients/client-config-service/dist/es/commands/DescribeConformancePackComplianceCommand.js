import { __extends } from "tslib";
import { DescribeConformancePackComplianceRequest, DescribeConformancePackComplianceResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeConformancePackComplianceCommand, serializeAws_json1_1DescribeConformancePackComplianceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns compliance details for each rule in that conformance pack.</p>
 * 		       <note>
 *             <p>You must provide exact rule names.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackComplianceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackComplianceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePackComplianceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePackComplianceCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackComplianceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConformancePackComplianceCommand = /** @class */ (function (_super) {
    __extends(DescribeConformancePackComplianceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConformancePackComplianceCommand(input) {
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
    DescribeConformancePackComplianceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConformancePackComplianceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConformancePackComplianceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConformancePackComplianceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConformancePackComplianceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConformancePackComplianceCommand(input, context);
    };
    DescribeConformancePackComplianceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConformancePackComplianceCommand(output, context);
    };
    return DescribeConformancePackComplianceCommand;
}($Command));
export { DescribeConformancePackComplianceCommand };
//# sourceMappingURL=DescribeConformancePackComplianceCommand.js.map