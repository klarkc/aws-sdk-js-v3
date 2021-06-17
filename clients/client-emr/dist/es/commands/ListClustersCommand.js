import { __extends } from "tslib";
import { ListClustersInput, ListClustersOutput } from "../models/models_0";
import { deserializeAws_json1_1ListClustersCommand, serializeAws_json1_1ListClustersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the status of all clusters visible to this AWS account. Allows you to filter
 *          the list of clusters based on certain criteria; for example, filtering by cluster creation
 *          date and time or by status. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple ListClusters
 *          calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListClustersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListClustersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "EMRClient";
        var commandName = "ListClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListClustersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListClustersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListClustersCommand(input, context);
    };
    ListClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListClustersCommand(output, context);
    };
    return ListClustersCommand;
}($Command));
export { ListClustersCommand };
//# sourceMappingURL=ListClustersCommand.js.map