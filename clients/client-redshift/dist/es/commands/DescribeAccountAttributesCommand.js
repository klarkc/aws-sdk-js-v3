import { __extends } from "tslib";
import { AccountAttributeList, DescribeAccountAttributesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeAccountAttributesCommand, serializeAws_queryDescribeAccountAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of attributes attached to an account</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAttributesCommand(input) {
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
    DescribeAccountAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeAccountAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAttributesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AccountAttributeList.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAccountAttributesCommand(input, context);
    };
    DescribeAccountAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAccountAttributesCommand(output, context);
    };
    return DescribeAccountAttributesCommand;
}($Command));
export { DescribeAccountAttributesCommand };
//# sourceMappingURL=DescribeAccountAttributesCommand.js.map