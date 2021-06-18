import { __extends } from "tslib";
import {
  CreateCloudFrontOriginAccessIdentityRequest,
  CreateCloudFrontOriginAccessIdentityResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
 * 			use an origin access identity to require users to access your content using a CloudFront URL instead
 * 			of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCloudFrontOriginAccessIdentityCommand = /** @class */ (function (_super) {
  __extends(CreateCloudFrontOriginAccessIdentityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateCloudFrontOriginAccessIdentityCommand(input) {
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
  CreateCloudFrontOriginAccessIdentityCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateCloudFrontOriginAccessIdentityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateCloudFrontOriginAccessIdentityCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand(input, context);
  };
  CreateCloudFrontOriginAccessIdentityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand(output, context);
  };
  return CreateCloudFrontOriginAccessIdentityCommand;
})($Command);
export { CreateCloudFrontOriginAccessIdentityCommand };
//# sourceMappingURL=CreateCloudFrontOriginAccessIdentityCommand.js.map
