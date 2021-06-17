import { __extends } from "tslib";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeClustersCommand, serializeAws_json1_1DescribeClustersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all provisioned DAX clusters if no cluster identifier
 *             is specified, or about a specific DAX cluster if a cluster identifier is
 *             supplied.</p>
 *         <p>If the cluster is in the CREATING state, only cluster level information will be
 *             displayed until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the DELETING state, only cluster level information will be
 *             displayed.</p>
 *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
 *             and creation time for the additional nodes will not be displayed until they are
 *             completely provisioned. When the DAX cluster state is <i>available</i>,
 *             the cluster is ready for use.</p>
 *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
 *             information for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeClustersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeClustersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClustersCommand = /** @class */ (function (_super) {
    __extends(DescribeClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClustersCommand(input) {
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
    DescribeClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DescribeClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClustersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClustersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeClustersCommand(input, context);
    };
    DescribeClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeClustersCommand(output, context);
    };
    return DescribeClustersCommand;
}($Command));
export { DescribeClustersCommand };
//# sourceMappingURL=DescribeClustersCommand.js.map