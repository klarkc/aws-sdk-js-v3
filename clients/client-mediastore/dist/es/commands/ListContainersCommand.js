import { __extends } from "tslib";
import { ListContainersInput, ListContainersOutput } from "../models/models_0";
import { deserializeAws_json1_1ListContainersCommand, serializeAws_json1_1ListContainersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p>
 *          <p>You can query to receive all the containers in one response. Or you can include the
 *             <code>MaxResults</code> parameter to receive a limited number of containers in each
 *          response. In this case, the response includes a token. To get the next set of containers,
 *          send the command again, this time with the <code>NextToken</code> parameter (with the
 *          returned token as its value). The next set of responses appears, with a token if there are
 *          still more containers to receive. </p>
 *          <p>See also <a>DescribeContainer</a>, which gets the properties of one
 *          container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, ListContainersCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, ListContainersCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new ListContainersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainersCommandInput} for command's `input` shape.
 * @see {@link ListContainersCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContainersCommand = /** @class */ (function (_super) {
    __extends(ListContainersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContainersCommand(input) {
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
    ListContainersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "ListContainersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContainersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListContainersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContainersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListContainersCommand(input, context);
    };
    ListContainersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListContainersCommand(output, context);
    };
    return ListContainersCommand;
}($Command));
export { ListContainersCommand };
//# sourceMappingURL=ListContainersCommand.js.map