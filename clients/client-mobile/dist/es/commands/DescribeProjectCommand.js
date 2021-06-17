import { __extends } from "tslib";
import { DescribeProjectRequest, DescribeProjectResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeProjectCommand, serializeAws_restJson1DescribeProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Gets details about a project in AWS Mobile Hub.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProjectCommand = /** @class */ (function (_super) {
    __extends(DescribeProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProjectCommand(input) {
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
    DescribeProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "DescribeProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProjectCommand(input, context);
    };
    DescribeProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProjectCommand(output, context);
    };
    return DescribeProjectCommand;
}($Command));
export { DescribeProjectCommand };
//# sourceMappingURL=DescribeProjectCommand.js.map