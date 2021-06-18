import { __extends } from "tslib";
import { GetTypedLinkFacetInformationRequest, GetTypedLinkFacetInformationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetTypedLinkFacetInformationCommand,
  serializeAws_restJson1GetTypedLinkFacetInformationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetTypedLinkFacetInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTypedLinkFacetInformationCommandInput} for command's `input` shape.
 * @see {@link GetTypedLinkFacetInformationCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTypedLinkFacetInformationCommand = /** @class */ (function (_super) {
  __extends(GetTypedLinkFacetInformationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTypedLinkFacetInformationCommand(input) {
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
  GetTypedLinkFacetInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetTypedLinkFacetInformationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTypedLinkFacetInformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTypedLinkFacetInformationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTypedLinkFacetInformationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetTypedLinkFacetInformationCommand(input, context);
  };
  GetTypedLinkFacetInformationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetTypedLinkFacetInformationCommand(output, context);
  };
  return GetTypedLinkFacetInformationCommand;
})($Command);
export { GetTypedLinkFacetInformationCommand };
//# sourceMappingURL=GetTypedLinkFacetInformationCommand.js.map
