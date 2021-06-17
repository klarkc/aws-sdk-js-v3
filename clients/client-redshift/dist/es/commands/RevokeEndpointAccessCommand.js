import { __extends } from "tslib";
import { EndpointAuthorization } from "../models/models_0";
import { RevokeEndpointAccessMessage } from "../models/models_1";
import { deserializeAws_queryRevokeEndpointAccessCommand, serializeAws_queryRevokeEndpointAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeEndpointAccessCommand = /** @class */ (function (_super) {
    __extends(RevokeEndpointAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeEndpointAccessCommand(input) {
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
    RevokeEndpointAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RevokeEndpointAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeEndpointAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAuthorization.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeEndpointAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRevokeEndpointAccessCommand(input, context);
    };
    RevokeEndpointAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRevokeEndpointAccessCommand(output, context);
    };
    return RevokeEndpointAccessCommand;
}($Command));
export { RevokeEndpointAccessCommand };
//# sourceMappingURL=RevokeEndpointAccessCommand.js.map