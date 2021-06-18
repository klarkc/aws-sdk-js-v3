import { __extends } from "tslib";
import { CreateKeyGroupRequest, CreateKeyGroupResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateKeyGroupCommand,
  serializeAws_restXmlCreateKeyGroupCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 * 		       <p>To create a key group, you must specify at least one public key for the key group. After you
 * 			create a key group, you can reference it from one or more cache behaviors. When you
 * 			reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies
 * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
 * 			a private key whose corresponding public key is in the key group. The signed URL or
 * 			cookie contains information about which public key CloudFront should use to verify the
 * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeyGroupCommand = /** @class */ (function (_super) {
  __extends(CreateKeyGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateKeyGroupCommand(input) {
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
  CreateKeyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateKeyGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateKeyGroupResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateKeyGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateKeyGroupCommand(input, context);
  };
  CreateKeyGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateKeyGroupCommand(output, context);
  };
  return CreateKeyGroupCommand;
})($Command);
export { CreateKeyGroupCommand };
//# sourceMappingURL=CreateKeyGroupCommand.js.map
