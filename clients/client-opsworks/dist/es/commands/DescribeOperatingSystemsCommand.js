import { __extends } from "tslib";
import { DescribeOperatingSystemsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeOperatingSystemsCommand, serializeAws_json1_1DescribeOperatingSystemsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeOperatingSystemsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeOperatingSystemsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeOperatingSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOperatingSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOperatingSystemsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOperatingSystemsCommand = /** @class */ (function (_super) {
    __extends(DescribeOperatingSystemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOperatingSystemsCommand(input) {
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
    DescribeOperatingSystemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeOperatingSystemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: DescribeOperatingSystemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOperatingSystemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOperatingSystemsCommand(input, context);
    };
    DescribeOperatingSystemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOperatingSystemsCommand(output, context);
    };
    return DescribeOperatingSystemsCommand;
}($Command));
export { DescribeOperatingSystemsCommand };
//# sourceMappingURL=DescribeOperatingSystemsCommand.js.map