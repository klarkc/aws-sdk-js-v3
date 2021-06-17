import { __extends } from "tslib";
import { DescribeStudioInput, DescribeStudioOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeStudioCommand, serializeAws_json1_1DescribeStudioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio
 *          access URL, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStudioCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStudioCommand = /** @class */ (function (_super) {
    __extends(DescribeStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStudioCommand(input) {
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
    DescribeStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "DescribeStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStudioInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStudioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStudioCommand(input, context);
    };
    DescribeStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStudioCommand(output, context);
    };
    return DescribeStudioCommand;
}($Command));
export { DescribeStudioCommand };
//# sourceMappingURL=DescribeStudioCommand.js.map