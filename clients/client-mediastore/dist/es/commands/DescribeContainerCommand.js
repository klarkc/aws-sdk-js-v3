import { __extends } from "tslib";
import { DescribeContainerInput, DescribeContainerOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeContainerCommand, serializeAws_json1_1DescribeContainerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the properties of the requested container. This request is commonly used to
 *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 *          new container is created. A container's endpoint does not change after it has been
 *          assigned. The <code>DescribeContainer</code> request returns a single
 *             <code>Container</code> object based on <code>ContainerName</code>. To return all
 *             <code>Container</code> objects that are associated with a specified AWS account, use
 *             <a>ListContainers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DescribeContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DescribeContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DescribeContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContainerCommand = /** @class */ (function (_super) {
    __extends(DescribeContainerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContainerCommand(input) {
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
    DescribeContainerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "DescribeContainerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContainerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContainerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContainerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeContainerCommand(input, context);
    };
    DescribeContainerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeContainerCommand(output, context);
    };
    return DescribeContainerCommand;
}($Command));
export { DescribeContainerCommand };
//# sourceMappingURL=DescribeContainerCommand.js.map