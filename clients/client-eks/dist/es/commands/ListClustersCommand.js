import { __extends } from "tslib";
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListClustersCommand, serializeAws_restJson1ListClustersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListClustersCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListClustersCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListClustersCommand = /** @class */ (function (_super) {
    __extends(ListClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListClustersCommand(input) {
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
    ListClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "ListClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListClustersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListClustersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListClustersCommand(input, context);
    };
    ListClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListClustersCommand(output, context);
    };
    return ListClustersCommand;
}($Command));
export { ListClustersCommand };
//# sourceMappingURL=ListClustersCommand.js.map