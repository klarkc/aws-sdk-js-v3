import { __extends } from "tslib";
import { DescribeResourcePermissionsRequest, DescribeResourcePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeResourcePermissionsCommand, serializeAws_restJson1DescribeResourcePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the permissions of a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourcePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeResourcePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourcePermissionsCommand(input) {
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
    DescribeResourcePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeResourcePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourcePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourcePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourcePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeResourcePermissionsCommand(input, context);
    };
    DescribeResourcePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeResourcePermissionsCommand(output, context);
    };
    return DescribeResourcePermissionsCommand;
}($Command));
export { DescribeResourcePermissionsCommand };
//# sourceMappingURL=DescribeResourcePermissionsCommand.js.map