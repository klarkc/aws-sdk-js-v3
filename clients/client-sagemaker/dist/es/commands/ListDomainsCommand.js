import { __extends } from "tslib";
import { ListDomainsRequest, ListDomainsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListDomainsCommand, serializeAws_json1_1ListDomainsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDomainsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDomainsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainsCommand = /** @class */ (function (_super) {
    __extends(ListDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainsCommand(input) {
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
    ListDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDomainsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDomainsCommand(input, context);
    };
    ListDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDomainsCommand(output, context);
    };
    return ListDomainsCommand;
}($Command));
export { ListDomainsCommand };
//# sourceMappingURL=ListDomainsCommand.js.map