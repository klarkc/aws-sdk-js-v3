import { __extends } from "tslib";
import { DescribePartnersInputMessage, DescribePartnersOutputMessage } from "../models/models_0";
import { deserializeAws_queryDescribePartnersCommand, serializeAws_queryDescribePartnersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the partner integrations defined for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribePartnersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribePartnersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribePartnersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePartnersCommandInput} for command's `input` shape.
 * @see {@link DescribePartnersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePartnersCommand = /** @class */ (function (_super) {
    __extends(DescribePartnersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePartnersCommand(input) {
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
    DescribePartnersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribePartnersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePartnersInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePartnersOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePartnersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribePartnersCommand(input, context);
    };
    DescribePartnersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribePartnersCommand(output, context);
    };
    return DescribePartnersCommand;
}($Command));
export { DescribePartnersCommand };
//# sourceMappingURL=DescribePartnersCommand.js.map