import { __extends } from "tslib";
import { PauseClusterMessage } from "../models/models_0";
import { PauseClusterResult } from "../models/models_1";
import { deserializeAws_queryPauseClusterCommand, serializeAws_queryPauseClusterCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Pauses a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PauseClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PauseClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PauseClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PauseClusterCommandInput} for command's `input` shape.
 * @see {@link PauseClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PauseClusterCommand = /** @class */ (function (_super) {
    __extends(PauseClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PauseClusterCommand(input) {
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
    PauseClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "PauseClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PauseClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PauseClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PauseClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPauseClusterCommand(input, context);
    };
    PauseClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPauseClusterCommand(output, context);
    };
    return PauseClusterCommand;
}($Command));
export { PauseClusterCommand };
//# sourceMappingURL=PauseClusterCommand.js.map