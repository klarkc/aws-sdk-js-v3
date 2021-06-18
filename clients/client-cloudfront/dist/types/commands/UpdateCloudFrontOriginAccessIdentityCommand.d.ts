import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityResult,
} from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateCloudFrontOriginAccessIdentityCommandInput extends UpdateCloudFrontOriginAccessIdentityRequest {}
export interface UpdateCloudFrontOriginAccessIdentityCommandOutput
  extends UpdateCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}
/**
 * <p>Update an origin access identity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCloudFrontOriginAccessIdentityCommand extends $Command<
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: UpdateCloudFrontOriginAccessIdentityCommandInput;
  constructor(input: UpdateCloudFrontOriginAccessIdentityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  private serialize;
  private deserialize;
}
