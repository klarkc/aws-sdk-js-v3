import { __extends } from "tslib";
import { DescribeSchemaRequest, DescribeSchemaResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSchemaCommand, serializeAws_json1_1DescribeSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a schema. For more information on schemas, see
 *       <a>CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSchemaCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSchemaCommand = /** @class */ (function (_super) {
    __extends(DescribeSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSchemaCommand(input) {
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
    DescribeSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSchemaCommand(input, context);
    };
    DescribeSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSchemaCommand(output, context);
    };
    return DescribeSchemaCommand;
}($Command));
export { DescribeSchemaCommand };
//# sourceMappingURL=DescribeSchemaCommand.js.map