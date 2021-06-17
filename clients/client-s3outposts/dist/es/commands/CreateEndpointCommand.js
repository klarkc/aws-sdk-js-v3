import { __extends } from "tslib";
import { CreateEndpointRequest, CreateEndpointResult } from "../models/models_0";
import { deserializeAws_restJson1CreateEndpointCommand, serializeAws_restJson1CreateEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
 *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
 *             actions within your virtual private cloud (VPC). </p>
 *         <p>This action creates an endpoint and associates it with the specified Outpost. </p>
 *         <p></p>
 *         <p>Related actions include:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, CreateEndpointCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, CreateEndpointCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEndpointCommand(input) {
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
    CreateEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3OutpostsClient";
        var commandName = "CreateEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateEndpointCommand(input, context);
    };
    CreateEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateEndpointCommand(output, context);
    };
    return CreateEndpointCommand;
}($Command));
export { CreateEndpointCommand };
//# sourceMappingURL=CreateEndpointCommand.js.map