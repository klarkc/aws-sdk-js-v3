import { __extends } from "tslib";
import { ListEndpointsRequest, ListEndpointsResult } from "../models/models_0";
import { deserializeAws_restJson1ListEndpointsCommand, serializeAws_restJson1ListEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
 *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
 *             actions within your virtual private cloud (VPC). </p>
 *         <p>This action lists endpoints associated with the Outpost.
 *             </p>
 *         <p></p>
 *         <p>Related actions include:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListEndpointsCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListEndpointsCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEndpointsCommand(input) {
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
    ListEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3OutpostsClient";
        var commandName = "ListEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEndpointsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEndpointsCommand(input, context);
    };
    ListEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEndpointsCommand(output, context);
    };
    return ListEndpointsCommand;
}($Command));
export { ListEndpointsCommand };
//# sourceMappingURL=ListEndpointsCommand.js.map