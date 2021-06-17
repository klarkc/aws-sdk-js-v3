import { __extends } from "tslib";
import { CreateUsageLimitMessage, UsageLimit } from "../models/models_0";
import { deserializeAws_queryCreateUsageLimitCommand, serializeAws_queryCreateUsageLimitCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a usage limit for a specified Amazon Redshift feature on a cluster.
 *             The usage limit is identified by the returned usage limit identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link CreateUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUsageLimitCommand = /** @class */ (function (_super) {
    __extends(CreateUsageLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUsageLimitCommand(input) {
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
    CreateUsageLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateUsageLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUsageLimitMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UsageLimit.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUsageLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateUsageLimitCommand(input, context);
    };
    CreateUsageLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateUsageLimitCommand(output, context);
    };
    return CreateUsageLimitCommand;
}($Command));
export { CreateUsageLimitCommand };
//# sourceMappingURL=CreateUsageLimitCommand.js.map