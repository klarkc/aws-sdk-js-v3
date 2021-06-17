import { __extends } from "tslib";
import { CreateEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { deserializeAws_queryCreateEndpointAccessCommand, serializeAws_queryCreateEndpointAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEndpointAccessCommand = /** @class */ (function (_super) {
    __extends(CreateEndpointAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEndpointAccessCommand(input) {
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
    CreateEndpointAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateEndpointAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEndpointAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAccess.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEndpointAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateEndpointAccessCommand(input, context);
    };
    CreateEndpointAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateEndpointAccessCommand(output, context);
    };
    return CreateEndpointAccessCommand;
}($Command));
export { CreateEndpointAccessCommand };
//# sourceMappingURL=CreateEndpointAccessCommand.js.map